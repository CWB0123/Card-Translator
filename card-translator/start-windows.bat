@echo off
where python >nul 2>nul
if errorlevel 1 (
  echo Python is required to run the translation backend.
  echo Install Python from https://www.python.org/downloads/
  pause
  exit /b 1
)

start "" http://localhost:8000
python server.py
pause
