import os


FIXTURE = 'fixtures/html'
BUILD = 'build'


# Copy files
url = input('Enter the beacon callback URL: ')
os.system(f'cp -r {FIXTURE}/* {BUILD}/')


# Overwrite the beacon callback URL
with open(f'{BUILD}/beacon.html', 'r') as f:
    data = f.read()
    data = data.replace('{{URL}}', url)
    
with open(f'dist/beacon.html', 'w') as f:
    f.write(data)
