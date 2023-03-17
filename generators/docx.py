import os
import shutil


FIXTURE = 'fixtures/docx'
BUILD = 'build'


# Copy files
url = input('Enter the beacon callback URL: ')
os.system(f'cp -r {FIXTURE}/* {BUILD}/')


# Overwrite the beacon callback URL
with open(f'{BUILD}/word/_rels/document.xml.rels', 'r') as f:
    data = f.read()
    data = data.replace('{{URL}}', url)
    
with open(f'{BUILD}/word/_rels/document.xml.rels', 'w') as f:
    f.write(data)


# Create docx file
shutil.make_archive('dist/beacon.docx', 'zip', 'build')
os.system('mv dist/beacon.docx.zip dist/beacon.docx')