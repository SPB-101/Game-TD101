if [[ $OSTYPE == "msys" ]]
then
  echo "127.0.0.1 local.ya-praktikum.tech" >> "C:\Windows\System32\drivers\etc\hosts"
else
  echo "127.0.0.1 local.ya-praktikum.tech" >> "/etc/hosts"
fi
