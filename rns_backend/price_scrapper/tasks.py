from celery import shared_task
import requests
from bs4 import BeautifulSoup
from price_scrapper.models import GasPrice


@shared_task
def scrape_and_store_gas_price():
    response = requests.get('https://snowtrace.io/')
    soup = BeautifulSoup(response.text, 'html.parser')

    div = soup.find('div', class_='text-right')

    price = 0

    if div:
        span_tag = div.find('a', href='/gastracker')

        if span_tag:
            span_tag = span_tag.find('span')
            span_text = span_tag.text
            price = float(span_text.split(' ')[0])

    print("data created")
    GasPrice.objects.create(price=price)
