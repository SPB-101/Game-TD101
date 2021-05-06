# Добавление сертификата для разработки на https

В корне рабочей директории выполним для создания ключей и сертификата

```
openssl req -x509 -newkey rsa:2048 -keyout ./ssl/keytmp.pem -out ./ssl/cert.pem -days 365
```

Затем получим расшифрованные ключи

```
openssl rsa -in ./ssl/keytmp.pem -out ./ssl/key.pem
```

`./ssl/keytmp.pem` больше не нужен. Удалим командой

```
rm ./ssl/keytmp.pem
```

Необходимо добавить в hosts строку:

```
127.0.0.1       local.ya-praktikum.tech
```

Пути до hosts:

- Windows 10 - `C:\Windows\System32\drivers\etc\hosts`
- Linux - `/etc/hosts`
- Mac OS X - `/private/etc/hosts`

Теперь разработка доступна на `https://local.ya-praktikum.tech:3000`
