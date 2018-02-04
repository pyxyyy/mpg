import socket
import threading
import json
import os
import mpg

BIND_IP = '0.0.0.0'
BIND_PORT = 9091

def run(runfile):
  with open(runfile,"r") as rnf:
    exec(rnf.read())


def handle_client(client_socket):
    request = client_socket.recv(1024)
    run('mpg.py')
    #request_response = json.loads(request)
    print "[*] Received: " + request
    client_socket.send('ACK')
    client_socket.close()

def tcp_server():
    server = socket.socket( socket.AF_INET, socket.SOCK_STREAM)
    server.bind(( BIND_IP, BIND_PORT))
    server.listen(5)
    print"[*] Listening on %s:%d" % (BIND_IP, BIND_PORT)

    while 1:
        client, addr = server.accept()
        print "[*] Accepted connection from: %s:%d" %(addr[0], addr[1])
        client_handler = threading.Thread(target=handle_client, args=(client,))
        client_handler.start()
        #run script

if __name__ == '__main__':
    tcp_server()