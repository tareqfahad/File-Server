# File-Server

a Node file server designed to be simple and lightweight and specially to be hosted on old computers for LAN usage 

## Requirments 

- node.js 

## dependencies 

1- express 

2 - neDB 

3 - multer 


## Usage 

### start the server 
```
npm start {port numbrt (optional)} 
```

the default port number is 3001. 

if you want to run the server on port 80 you need to install [libcap2-bin](https://packages.debian.org/sid/libcap2-bin) first and the run the app on port 80 

## get files and download
send a get request to "/"

response
```json
{
    "data": [
        {
            "name": "shakr-ya-shaker.mp4",
            "type": "video/mp4",
            "_id": "i7lsjfHmRTjtcGCR"
        }
    ]
}
```

### downlaod file
you can download the file by sending the file's id (_id) in params

## upload files
by sending a post request to "/" you can upload single or multible files at one time 

but make sure that your <form> has the enctype equal to "multipart/form-data" and <input> has the name of "files"
  
  exaple: 
  
 ```html 
<form action="http://localhost:3001/" enctype="multipart/form-data" method="POST"> 
   <input type="file" name="files" />
   <input type="submit" value="Upload a file"/>
</form>
```
response 
```json
{
    "success": true,
    "code": "1 has been uploaded"
}
```

## delete file
you can only delete one single file by file's id (_id) in one request (bulk deleted are not supported) 

send delete request to "/:_id" 

response 
```json 
{
    "success": true,
    "code": "Deleted"
}
```

## update file name 
you can change the file name by sending patch requset to "/:_id"

response 
```json
{
    "success": true,
    "code": "Updated"
}
```


See you :) 
