# Use the official Python image as base
FROM python:3.10-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /app

# Copy requirements.txt to container and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ./entrypoint.sh /app/

RUN sed -i 's/\r$//g' /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Copy the Django project files to the container
COPY . .

# Expose port 8001 for Django development server
EXPOSE 8001

# Run Django development server
ENTRYPOINT ["./entrypoint.sh"]
