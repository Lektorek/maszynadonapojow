#*-*coding: utf-8*-*
from BeautifulSoup import BeautifulSoup as BS
import requests
import json
import time
import RPi.GPIO as GPIO

def Nalej(id,n1,n2,n3,n4):
	GPIO.setmode(GPIO.BOARD)
	GPIO.setwarnings(False)
	for x in range(0, n1):
		GPIO.setup(12,GPIO.OUT)
		time.sleep(1)
	GPIO.setup(12, GPIO.IN)
	for x in range(0, n2):
		GPIO.setup(16, GPIO.OUT)
		time.sleep(1)
	GPIO.setup(16, GPIO.OUT)
	for x in range(0, n3):
		GPIO.setup(18, GPIO.OUT)
		time.sleep(1)
	GPIO.setup(18, GPIO.IN)
	for x in range(0, n4):
		GPIO.setup(10, GPIO.OUT)
		time.sleep(1)
	GPIO.setup(10, GPIO.INPUT)


try:
	html_link = "http://91.189.37.202/misc/pokaz_zamowienia_json.php"	#Link do strony
	while(True):
		html = requests.get(html_link)		#Otwarcie strony
		if html.status_code == 200:		#Sprawdzenie Poprawności otwarcia strony
			print "200 OK"
		#else:
		#	print "HTML error code: %d" % (html.status_code)
		#	exit()
			tekst_html = BS(html.text).getText()       #Pobranie tekstu ze strony HTML
			#print "HTML: ", tekst_html
			parsed_json = json.loads(tekst_html)       #Parsowanie JSON
			#print "Parsed JSON:", parsed_json
			if(tekst_html == "[]"):
				time.sleep(1)
				continue

			for parse in parsed_json:		#Pętla dla rekordu
				print "-----------------------------"
				print "Id: %s" % parse["id"]
				print parse["Napoj1"] + ": " + parse["Napoj1Ilosc"]
				print parse["Napoj2"] + ": " + parse["Napoj2Ilosc"]
				print parse["Napoj3"] + ": " + parse["Napoj3Ilosc"]
				print parse["Napoj4"] + ": " + parse["Napoj4Ilosc"]
				print "-----------------------------"
				Nalej(int(parse["id"]), int(parse["Napoj1Ilosc"]), int(parse["Napoj2Ilosc"]), int(parse["Napoj3Ilosc"]), int(parse["Napoj4Ilosc"]))
			#TUTAJ KOD GPIO I ZROBIENIE NAPOJU
				usun = 'http://91.189.37.202/maszynadonapoi/usun.php?id=' + parse["id"]	#Usuniecie wykonanego rekordu
				print usun
				requests.post(usun)

		else:
			print "HTML error code: %d" % (html.status_code)
			time.sleep(1)
			continue
		continue
except KeyboardInterrupt:
	print ""
	print "Bye!"
	exit()
