if [[ ! -d ssl ]]; then
  mkdir ssl;
fi
cd ssl/;
openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout RootCA.key -out RootCA.pem -subj "//X=/C=RU/CN=Team-SPB-101";
openssl x509 -outform pem -in RootCA.pem -out RootCA.crt;
openssl req -new -nodes -newkey rsa:2048 -keyout localhost.key -out localhost.csr -subj "//X=/C=RU/ST=SPB/L=SPB/O=Localhost-Certificates/CN=Game-TD101";
openssl x509 -req -sha256 -days 365 -in localhost.csr -CA RootCA.pem -CAkey RootCA.key -CAcreateserial -extfile ../scripts/domains.ext -out localhost.crt;
rm RootCA.srl;
rm localhost.csr;
