CenterMessage
=============

Back to basic's. Building a visually impressive message popup.

CenterMessage is a jQuery plugin essentially to replace the dreaded alert; but never the less can be left as-is 
in a production environment.

As this is new and development will continue to grow, it has only been tested in Chrome.

Tested with jQuery versions 1.4+

Usage

Declare scripts/css

<link href="/css/center-message.css" rel="stylesheet" />
<script src="/scripts/jquery-1.11.0.min.js"></script>
<script src="/scripts/CenterMessage.js"></script>

Applying to a click event/Ajax callback seems to fit most requirements (only accepts body selector)
$('body').centerMe({ top: '30%', message: "Welcome To Center Message", seconds: 2000 });


//Editable properties

$('body').centerMe
 ({ 
   image: "csloader.gif",
   width: '100%',
   message: "Well Done Complete", 
   seconds: 2000,
   position: 'fixed',
   top: '10%',
   bgColor: '#32CD32',
   fontColor: '#fff',
   type: 'alert'
 });
 
 Editing the image property only works if the type property equals to insert (type='insert'), which simply 
 adds a animated loader gif.
 
 Plug straight in without any html modification.
 
 Demo here:
 http://www.tezwingfield.co.uk/CenterMessage/