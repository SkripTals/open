@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body, .wrapper {
    background: #F3F4F6 repeat-y;
    background-size: 1920px 1080px;
    background-repeat: repeat;
}
body {
    font-family: 'Jost', sans-serif;
    color: #ffffff;
}
body::-webkit-scrollbar{ 
  display: none;
}

button, input, optgroup, select, textarea {
    font-family: unset;
}

.col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {
    position: unset;
}

.container {
    width: 1300px;
    max-width: 95%;
}

.nav-link[href="/feedback"],.nav-link[href="/news"]{display:none}
.xbox_store .store-categories{display:none}
.xbox_store .xbox__header {display:none}
.xbox__body {padding: 0px;background: none;}
.xbox {background: none;padding: 0px;}
.xbox_monitoring .xbox__header {display:none}
.xbox_monitoring .xbox__footer {display:none}
.xbox {box-shadow: none;}
.product__quantity  {display:none}
.nav-pills [href="/profile/bonuses"] {display: none;}
.col-lg-8 .xbox .xbox__header {display: none;}

.xbox__body {
    color: black;
}

.xbox {
    margin-bottom: 15px;
}

.xbox_store>.xbox__footer {
    color: black;
    font-size: 80%;
    background: none;
    text-align: center;
    margin-top: 20px;
}
.footer-link__item {
    padding: 10px 20px;
    color: black;
    margin: -10px 5px 0px 5px;
    background: white;
    border-radius: 15px;
}
.footer-link__item:hover {
    padding: 10px 20px;
    color: white;
    margin: -10px 5px 0px 5px;
    background: black;
    border-radius: 15px;
}

::selection {
   color: white !important;
   background: gray !important;
}

/*ÐÐ°Ð²Ð±Ð°Ñ€*/

.navbar .navbar-brand, .navbar .navbar-brand:focus, .navbar .navbar-brand:hover, .navbar .navbar-nav .nav-link, .navbar .navbar-toggler, .navbar .navbar-toggler:focus, .navbar .navbar-toggler:hover {
    color: black;
}
.navbar {
    text-transform: none;
    background: #fff;
    z-index: 100;
    box-shadow: none;
    padding: 0px;
    border-radius: 0px 0px 15px 15px;
}
.float-lg-right {
    float: right!important;
    text-transform: uppercase;
}

.navbar-brand {
    display: flow-root !important;
    padding: 1.3em 1.3em;
    margin-right: 30px;
  	margin-left: 15px;
    font-size: 16px;
    line-height: inherit;
    white-space: nowrap;
    font-weight: bold;
    padding-right: .5rem;
    padding-left: .5rem;
}

.navbar .nav-link {
    padding: 1.3em 1.3em;
}
.navbar .navbar-nav .nav-link:focus, .navbar .navbar-nav .nav-link:hover {
    color: white;
    background: black;
    border-bottom: unset;
}
.nav-link:hover {
    border-top: none;
  	background: white;
    color: black;
}

.nav-link[href="/api/lang.php"] {
    padding-left: 20px !important;
    padding-right: 20px !important;
    border-radius: 0px 0px 15px 0px;
    font-weight: bold;
}
@media (max-width: 991px)
{
    .nav-link[href="/api/lang.php"] {
        border-radius: 0px 0px 15px 15px;
    }
}

.navbar .navbar-toggler-icon {
    background-image: unset;
}
.navbar-toggler-icon {
    display: inline-block;
    width: 0rem;
    height: 0rem;
    vertical-align: middle;
}

button:focus {
    outline: none;
}
.btn:focus {
    outline: none;
	border: none;
}

.navbar .navbar-toggler-icon {
    background-image: unset;
}
.navbar-toggler {
    padding: .25rem 0rem;
    line-height: 1;
    background: transparent;
    border: unset;
    border-radius: unset;
}
.navbar .navbar-toggler {
    border-color: unset;
    border: unset;
	margin-top: 15px;
}
.navbar-toggler:after {
    font-family: FontAwesome;
    content: "\F0C9";
    font-weight: 100;
    font-size: 25px;
}
.navbar .navbar-nav .active>.nav-link, .navbar .navbar-nav .nav-link.active, .navbar .navbar-nav .nav-link.open, .navbar .navbar-nav .open>.nav-link {
    color: white;
    background: black;
}

.navbar-nav .dropdown .nav-link:after {
    font-family: FontAwesome;
    content: "\f107";
    font-size: 15px;
    margin-left: 4px;
    color: #bbbbbb;
}
.navbar-nav .dropdown .nav-link:focus:after { 
  font-family:FontAwesome;
  content:"\f106";
  margin-left:4px
}

.dropdown-menu { 
    background: none;
    overflow:hidden;
    padding:0px;
  	border-radius: 0px;
  	margin: 0px;
  	color: #a1a1a1;
}
.dropdown-menu .dropdown-item:hover {
    box-shadow:none;
    color: white;
}
.dropdown-menu .dropdown-item {
    color: #a1a1a1;
    line-height: 24px;
    margin-bottom: 0px;
    background: black;
}
.dropdown-menu button { 
    color: #a1a1a1;
    padding:unset;
    line-height:24px;
    transition:0.1s
}
.dropdown-menu button a { 
    color: #a1a1a1;
    display:block;
    padding: 5px 1.5rem;
    transition: all 0.1s
}
.dropdown-menu button a:hover { 
  	color: white;
}
.dropdown-menu { 
  	border: none;
}
.dropdown-item {
    padding: 5px 1.5rem;
}
.dropdown-item:nth-child(2n) { 
  	animation: zoomIn 0.2s;
}
.dropdown-item:nth-child(3n) { 
  	animation: zoomIn 0.4s;
}
.dropdown-item:nth-child(4n) { 
  	animation: zoomIn 0.6s;
}
.dropdown-item:nth-child(5n) { 
  	animation: zoomIn 0.8s;
}
.dropdown-item:nth-child(6n) { 
  	animation: zoomIn 1s;
}
.dropdown-item:last-child {
  	border-radius: 0px 0px 15px 15px;
}

/*Ð¨Ð°Ð¿ÐºÐ°*/

.header__image {
    margin-top: 85px;
    border-radius: 15px;
  	opacity: 0.9;
}

/*Ð˜Ð½Ð¿ÑƒÑ‚*/

.store-filters .input-group {
    border-radius: 25px;
}
.input-group-addon {
    color: hsl(0, 0%, 70%);
    background: #ffffff;
    border-radius: 25px;
    border: unset;
}
.form-control, .form-control:focus {
    color: black;
    border-color: transparent;
    background: white;
    transition: all 0.2s ease-in-out;
}
.form-control {
    border: none;
    border-radius: 25px;
}
.store-filters .form-control {
    padding: 13px 13px 13px 0px;
}
.form-control {
    padding: 13px 13px 13px 0px;
}
::placeholder {
  color: #e2e2e2 !important;
}
.fa-search:before {
    content: "\F002";
    background: #cdcdcd;
    padding: 10px;
    border-radius: 20px;
    color: white;
    margin-left: -6px;
}
select.form-control:not([size]):not([multiple]) {
    height: unset;
}

/*Ð¢Ð¾Ð²Ð°Ñ€Ñ‹*/

.product {
    background: white;
  	box-shadow: unset;
    transform: none;
  	border-radius: 15px;
  	animation: none;
}
.product:hover {
    box-shadow: unset;
    transform: none;
  	box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.1);
  	transform: translate3d(0px, -5px, 0px);
    transition: all 300ms ease 0s;
}
.product__image {
    width: 100%;
    transform: scale(0.9);
    padding-top: 0px;
    padding-bottom: 50px;
}
.store-products__item {
    animation: none;
}
.product__name {
    position: absolute;
    bottom: 5px;
    left: 10px;
    right: 70px;
    color: black;
    background: unset;
    padding: 8px;
    font-size: 12px;
    font-weight: 700;
    text-overflow: ellipsis;
    text-shadow: unset;
    overflow: hidden;
    opacity: 1;
}
.product__discount {
    background: #ffffff;
    border-radius: 90px;
    top: 10px;
    right: 10px;
    opacity: 1;
    font-weight: 400;
    box-shadow: 0px 5px 15px -6px rgb(0 0 0 / 30%);
    z-index: 3;
    color: black;
}
.product__price {
    color: #a6b1e7;
    text-align: end;
    background: unset;
    bottom: 8px;
    right: 10px;
    border-radius: 10px;
    font-weight: bold;
    z-index: 1;
}
.product__price-old {
    display: inline;
    font-size: 11px;
    right: 1px;
    font-weight: 100;
  	color: #cbcfe3;
}
.blueprint__image, .product_blueprint .product__image {
    background: url(https://i.imgur.com/tXpilqO.png);
    background-size: 90%;
    background-position: center 0;
    background-repeat: no-repeat;
}
.product_blueprint .product__image {
    transform: scale(0.8);
}
.store-products__item:first-child, .store-products__item:nth-child(2), .store-products__item:nth-child(3), .store-products__item:nth-child(4) {
    width: 25%;
}
@media (max-width: 560px)
{
.store-products__item:first-child, .store-products__item:nth-child(2), .store-products__item:nth-child(3), .store-products__item:nth-child(4) {
    width: 50%;
}
}

/*ÐœÐ¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³*/

.xserver {
    margin-bottom: 10px;
    padding: 14px;
    background: #ffffff;
    border-radius: 15px;
    transition: all 220ms ease-out;
}

.xserver__title a {
    font-size: 15px;
    text-overflow: ellipsis;
    color: black;
    font-weight: 100;
    transition: all 0.2s ease-out;
}

.xserver__title a:hover {
    font-size: 15px;
    text-overflow: ellipsis;
    color: black;
    font-weight: 100;
    transition: all 0.2s ease-out;
}

.xserver__links a {
    color: #ffffff;
    font-weight: 100;
    text-shadow: 1px 1px 2px rgba(1, 1, 1, 0.2);
    margin-left: 2px;
    font-size: 15px;
    margin-top: 2.9px;
    letter-spacing: 1px;
    transition: all .5s ease-out;
}

.xserver:hover .xserver__links a {
    letter-spacing: 0px;
    transition: all .5s ease-out;
}

.xserver__links {
    font-weight: 100;
}

.fa-user-times:before {
    content: none;
}

.fa-bar-chart-o:before, .fa-bar-chart:before {
    content: none;
}

.fa-globe:before {
    content: none;
}

.fa-play:before {
    font-family: FontAwesome;
    content: "\f144";
    font-size: 23px;
}

.fa-play {
    transition: 0.5s;
    margin-right: -11px;
    color: #e6e6e6;
    text-shadow: none;
    margin-top: 0px;
}

@keyframes rotation {
    from {transform: rotate(359deg);}
    to   {transform: rotate(0deg);}
}

@keyframes bounce-2 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-100px); }
    100% { transform: translateY(0); }
}

.xserver .xserver__status .progress .bg-success {
    border-radius: 20px;
}

@keyframes load {
  0% { width: 0; }
  100% { width: 68% !important; }
}

.xserver__status {
    margin-bottom: 5px;
    padding-right: 25px;
}

.progress-bar-striped {
    background-size: 1rem 1rem;
}

.progress {
    background-color: #d8d8d8;
    background-image: linear-gradient(45deg, #e6e6e6 25%, transparent 0, transparent 50%, #e6e6e6 0, #e6e6e6 75%, transparent 0, transparent);
    animation: progress-bar-stripes 1s linear infinite;
    background-size: 1rem 1rem;
}

.xserver__links {
    display: flex;
    margin-top: -32px;
    margin-left: 10px;
    margin-right: 10px;
}

.progress-bar {
    height: 1.7rem;
}

.progress {
    border-radius: 20px 20px 20px 20px;
}

.xbox_monitoring .xserver:first-child {
    border-radius: 15px;
}
.xserver:nth-child(1) .xserver__status .progress .bg-success {
    background: linear-gradient(to right, #dc4848 0%, #dc7448 100%);
    animation: load 2s normal forwards;
}
.xserver:nth-child(2) .xserver__status .progress .bg-success {
    background: linear-gradient(to right, #0bab61 0%, #98b73b 100%);
    animation: load 3s normal forwards;
}
.xserver:nth-child(3) .xserver__status .progress .bg-success {
    background: linear-gradient(to left, #f9bf76 0%, #f39f86 100%);
    animation: load 4s normal forwards;
}
.xserver:nth-child(4) .xserver__status .progress .bg-success {
    background: linear-gradient(to right, #a88beb 0%, #decef8 100%);
    animation: load 5s normal forwards;
}
.xserver:nth-child(5) .xserver__status .progress .bg-success {
    background: linear-gradient(to right, #6db3f4 0%, #aed7f0 100%);
    animation: load 6s normal forwards;
}

.xserver:nth-child(1) .fa-play:hover {
    color: #dc6048;
}
.xserver:nth-child(2) .fa-play:hover {
    color: #70b446;
}
.xserver:nth-child(3) .fa-play:hover {
    color: #f9be77;
}
.xserver:nth-child(4) .fa-play:hover {
    color: #c8b3f3;
}
.xserver:nth-child(5) .fa-play:hover {
    color: #a8d2f3;
}

.xserver:nth-child(1) .xserver__title:after {
    content: "Trio Procedural" ;
    font-weight: 100;
    margin-left: 4px;
    font-size: 13px;
    opacity: 0.5;
    transition: all 0.5s ease-out;
    color: #777777;
}

.xserver:nth-child(2) .xserver__title:after {
    content: "Five Barren" ;
    font-weight: 100;
    margin-left: 4px;
    font-size: 13px;
    opacity: 0.5;
    transition: all 0.5s ease-out;
    color: #777777;
}

.xserver:nth-child(3) .xserver__title:after {
    content: "No limit" ;
    font-weight: 100;
    margin-left: 4px;
    font-size: 13px;
    opacity: 0.5;
    transition: all 0.5s ease-out;
    color: #777777;
}

.xserver:nth-child(4) .xserver__title:after {
    content: "Global Online" ;
    font-weight: 100;
    margin-left: 4px;
    font-size: 13px;
    opacity: 0.5;
    transition: all 0.5s ease-out;
    color: #777777;
}

.xserver:nth-child(5) .xserver__title:after {
    content: "Global Online" ;
    font-weight: 100;
    margin-left: 4px;
    font-size: 13px;
    opacity: 0.5;
    transition: all 0.5s ease-out;
    color: #777777;
}

/*nav-pills*/

.nav-pills .nav-link {
    color: black;
    background-color: white;
  	border-radius: 25px;
}
.nav-pills .nav-link:hover {
    color: black;
    background-color: white;
    letter-spacing: 2px;
}
.nav-pills .nav-link:focus {
    color: black;
    background-color: white;
    letter-spacing: 2px;
}
.nav-pills .nav-link.active {
    color: white;
    background-color: black;
    letter-spacing: 2px;
}
.flex-column {
    text-align: center;
}

/*servers-nav-pills*/

.xbox_server .nav-pills .nav-link:nth-child(2) {
    display: none;
}
.server-navigation .nav-pills .nav-link {
    color: black;
    background-color: white;
  	border-radius: 0px;
	transition: none;
}
.server-navigation .nav-pills .nav-link:hover {
    color: white;
    background-color: #b6b6b6;
    letter-spacing: 0px;
}
.server-navigation .nav-pills .nav-link:focus {
    color: white;
    background-color: #b6b6b6;
    letter-spacing: 0px;
}
.server-navigation .nav-pills .nav-link.active {
    color: white;
    background-color: black;
    letter-spacing: 0px;
}
.server-navigation .nav-pills .nav-link:first-child {
  border-radius: 0px 0px 0px 15px;
}
.server-navigation .nav-pills .nav-link:last-child {
  border-radius: 0px 0px 15px 0px;
}
@media (max-width: 767px)
{
.server-navigation .nav-pills .nav-link:first-child {
  border-radius: 0px 0px 0px 0px;
}
}
@media (max-width: 767px)
{
.server-navigation .nav-pills .nav-link:nth-child(3) {
  border-radius: 0px 0px 15px 15px;
}
}
.server-navigation {
    display: none; 
}

.xbox_server .xbox__body {	
   background: white;
   padding: 20px;
   border-radius: 15px;
}
.xbox_server .xbox__header {
   margin-bottom: 0px;
}
.xbox_server .input-group {
   border: solid #ebebeb 1px;
   border-radius: 15px;
}
.xbox_server .input-group-btn {
   padding: 5px;
}

.sd-items {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 10px;
}
.sd-item {
   background: white;
   border: solid #ebebeb 1px;
   border-radius: 15px;
   padding: 10px;
     text-align: start;
}
.sd-text {
   font-size: 18px;
   line-height: 15px;
     margin-bottom: 5px;
   font-weight: 600;
   color: #23272a;
}
.sd-subtext {
   font-size: 14px;
   line-height: 15px;
   color: #bbb;
}

/*Header*/

.xbox__header {
    margin: 0;
    line-height: 100%;
    font-size: 1.05rem;
    font-weight: 900;
    color: black;
    text-align: center;
    text-transform: uppercase;
    background: white;
    padding: 10px;
    border-radius: 15px 15px 0px 0px;
}
.xbox__header h4 {
    font-weight: bold;
}
.xbox__header {
    margin-bottom: 5px;
}
.xbox__footer {
    background: none;
    padding: 0;
    margin-top: 5px;
}
.xbox_purchases .xbox__header {
    display: none;
}

.xbox_queue .xbox__header {
    display: none;
}

.xbox_payments .xbox__header {
    display: none;
}

.xbox_transfers .xbox__header {
    display: none;
}

.xbox_transfers .xbox__header {
    display: none;
}

.xbox_profile .xbox__header {
    display: none;
}
.xbox__footer .btn {
    border-radius: 0px 0px 15px 15px;
    cursor: pointer;
}
.btn-danger {
    color: black;
    background-color: #ffffff;
    letter-spacing: 0px;
}
.btn-danger:hover {
    color: black;
    background-color: #ffffff;
    letter-spacing: 2px;
}
.btn, .btn:hover {
    border: unset;
}

/*Ð¢Ð°Ð±Ð»Ðµ*/

.table-wrapper .table-footer {
    margin-top: 10px;
}
.table-body {
    border-radius: 15px;
}
.table > thead > tr > th {
    background: #f3f3f3;
  	color: black;
}
.table-striped > tbody > tr:nth-of-type(odd) {
    background-color: white;
  	color: black;
}
.table-striped > tbody > tr {
  	background-color: #fafafa;
  	color: black;
}
.xbox_profile .table-wrapper, table {
    border-radius: 15px 15px;
    overflow: hidden;
}
.table > thead > tr > th {
    background-color: #fafafa;
}
.table td, .table th {
    padding: .75rem;
    vertical-align: middle;
}
.image64 {
    height: 64px;
    width: 64px;
    background: #f3f4f6;
    padding: 7px;
    border-radius: 15px;
    box-shadow: inset 2px 4px 3px #e4e5e9;
}
.mb-3 {
    margin-bottom: 1rem !important;
    background: white;
    padding: 10px;
    border-radius: 15px;
}
.mb-3 .btn-success {
    background: #ffffff;
    color: #000;
    opacity: 0.8;
    border-radius: 15px;
    border: solid 1px black !important;
  	transition: all 0ms !important;
}
.mb-3 .btn-success:hover {
    background: black;
    color: white;
    opacity: 0.8;
    border-radius: 15px;
    border: solid 1px black !important;
  	transition: all 0ms !important;
}
.mb-3 .ladda-label {
  	transition: all 0ms !important;
}
.mb-3 .btn-primary {
    color: #fff;
    background-color: #91c8ee;
    border-radius: 15px;
}
.mb-3 .btn-primary:hover {
    color: #fff;
    background-color: #87bade;
    border-radius: 15px;
}
.table-striped .btn-success {
    background: #56bf85;
    border: none;
    color: #fff;
    opacity: 1;
    margin-left: 10px;
}
.table-striped .btn-block {
    display: block;
    width: unset;
  	border-radius: 10px;
}

.ladda-button[data-style=zoom-in], .ladda-button[data-style=zoom-in] .ladda-label, .ladda-button[data-style=zoom-in] .ladda-spinner, .ladda-button[data-style=zoom-out], .ladda-button[data-style=zoom-out] .ladda-label, .ladda-button[data-style=zoom-out] .ladda-spinner {
    -webkit-transition: unset !important;
    transition: unset !important;
}

/*ÐŸÑ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´Ðµ*/

.xbox_promocodes .xbox__header {
    display: none;
}
label {
  display: none;
}
.xbox_promocodes .form-group {
    margin-bottom: 0px;
}
.xbox_promocodes .form-control {
    padding: 13px 13px 13px 20px;
}
.table-striped a {
    color: black;
    font-weight: bold;
}
.xbox_promocodes .input-group {
    width: 152.5%;
}
@media (max-width: 1200px)
{
.xbox_promocodes .input-group {
    width: 100%;
}
}
.xbox_promocodes .btn {
    border-radius: 15px;
    box-shadow: unset;
}
.xbox_promocodes .btn-success.disabled, .btn-success:disabled {
    background-color: #a2a2a2 !important;
    border-color: unset;
    opacity: 1;
    color: #ffffff;
}
.xbox_promocodes .btn-success.disabled, .btn-success:disabled:hover {
    background-color: #a2a2a2;
    border-color: unset;
    opacity: 1;
    color: #ffffff;
}
.btn-success {
    background: #56bf85;
    border: none;
    color: #fff;
    opacity: 1;
}
.btn-success:hover {
    background: #47A571;
    border: none;
    color: #fff;
    opacity: 1;
}


.footer {
    right: 0px;
  	left: unset;
    border-radius: 0 3px 0 0;
    background: white;
    color: #727272;
    font-size: 8px;
    border-radius: 15px 0px 0px 0px;
}
.footer a {
    color: #868ca3;
}

/*ÐœÐ¾Ð´Ð°Ð»*/

@media (min-width: 576px)
{
.modal-sm {
    max-width: 350px;
}
}
.modal-header {
    justify-content: center;
  	padding: 0px;
}
.modal-header, .modal-footer {
    background: none !important;
}
.modal-footer {
    padding-top: 0px;
}
.modal .modal-body {
    padding-bottom: 0px;
}
.modal-body {
    background: none;
}
.modal .modal-content {
    background: #f3f4f6;
    border-radius: 5px 50px;
    padding: 15px;
    color: #909090;
}
.modal .modal-header h4 {
    font-size: 26px;
    font-weight: bold;
    display: block;
    text-align: center;
    color: #bbbbbb;
    padding-top: 15px;
  	text-transform: uppercase;
}
.modal .btn {
    border-radius: 25px;
    cursor: pointer;
}
.input-group-btn .modal .btn {
    box-shadow: unset;
}
.modal-kit .modal-content, .modal-info .modal-content {
    width: unset;
}
.modal-footer .btn {
    padding: 13px 61px 13px 30px;
    left: 30.3px;
    border-radius: 25px 0px 0px 25px;
}
.modal-kit .modal-dialog .modal-content .modal-footer .btn {
    padding: 13px 30px 13px 30px;
    left: unset;
    border-radius: 0px 25px 25px 0px;
}
.btn-secondary {
    color: #b2b2b2;
}
.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {
    color: black;
}
.form-control:disabled, .form-control[readonly] {
    background: white;
}
.modal-item .input-group-btn:not(:first-child)>.btn, .input-group-btn:not(:first-child)>.btn-group {
    background: white;
  	opacity: 1;
}
.input-group-btn:not(:last-child)>.btn, .input-group-btn:not(:last-child)>.btn-group {
    background: white;
    opacity: 1;
}
.fa-minus:before {
    content: "\F068";
  	color: black;
}
.fa-plus:before {
    content: "\F067";
    color: black;
}
.modal-body .form-control {
    padding: 13px 13px 13px 13px;
}
.input-group-btn .form-control {
    text-align: center;
}
.text-center {
    text-align: center!important;
    margin-bottom: 30px;
}
.fade {
    backdrop-filter: blur(5px);
}
.modal-service .modal-footer {
    margin-top: 10px;
}
.modal-service .modal-dialog .modal-content .modal-footer {
    justify-content: right;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    text-align: center;
    color: #bdbdbd;
    text-transform: uppercase;
  	font-weight: bold;
}

/*Ð ÑƒÐ»ÐµÑ‚ÐºÐ°*/

.roulette-item{box-shadow:0 1px 12px 6px rgba(0, 0, 0, .4);border-bottom:solid 4px red}
.roulette-item {
    box-shadow: none;
    background: transparent;
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.03);
    transform: skewY(-2deg);
}

.blueprint__image, .roulette-item_blueprint .roulette-item__image {
    background: url(https://i.imgur.com/tXpilqO.png);
    background-size: cover;
    box-shadow: none;
}
.roulette-item__description{padding:0 15px 15px 15px}
.roulette-item__description > b {
    font-size: 14px;
    font-weight: 100;
}
.roulette-item__image{padding:0px}
.roulette-item__image {
    width: 240px;
    height: 240px;
    padding: 25px;
    overflow: hidden;
    border-radius: 35px;
    background: #fff;
    transform: scale(0.9);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
}

.roulette:before {
    border-top: 20px solid #bbbbbb;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
.roulette:before {
    content: "";
    position: absolute;
    left: 50%;
    margin: -16px 0 0 -18px;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    align-content: center;
    animation-name: bounce-2;
    animation-timing-function: ease;
}
.modal-roulette .modal-content { 
  width:100% !important;
}
.modal-roulette .roulette {
    -webkit-mask-image: linear-gradient(to left, rgba(255, 255, 255, 0) 5%, #000 34%, #000 65%, rgba(255, 255, 255, 0) 86%);
}
.modal-roulette .modal-content {
    border-radius: 5px 50px;
    padding: 32px;
    width: 400px;
    color: #909090;
}
.roulette__description {
    text-align: center;
}
@keyframes bounce-2 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}
.container-3WKP9P {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 200px;
    margin-left: 10px;
    margin-right: 10px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 12px;
    background: #fff;
    background: var(--white);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: initial;
    margin-bottom: 15px;
    animation: zoomIn 1s;
}
.icon-1lW2Ee {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.textContainer-mTPAIw {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.name-3T7FKQ {
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    color: #23272a;
    color: var(--not-quite-black);
}
.category-1AFH8P {
    font-size: 13px;
    line-height: 18px;
    color: #99aab5;
    color: var(--greyple);
}
.icon-blueprints {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    background: url(https://i.imgur.com/tXpilqO.png);
    background-size: 110%;
    background-position: center center;
    background-repeat: no-repeat;
}
.modal-roulette .modal-content .modal-footer .btn {
    padding: 13px 61px 13px 30px;
    left: unset;
    border-radius: 0px 25px 25px 0px;
}

/*ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ*/

.desc-service {
    background: #fff;
    padding: 4px;
    border-left: 3px solid #6e6e6e;
    margin: 0;
    color: black;
    letter-spacing: 0px;
    border-radius: 0px 15px 15px 0px;
    margin-bottom: 2px;
    transition: all 0.2s ease-out;
    cursor: default;
    padding-left: 14px;
}
.desc-service:hover {
    transition: all .3s ease-out;
}

.desc-service2 {
    background: #fff;
    border-left: 3px solid #56bf85;
    -webkit-transform: skewY(0deg);
    transform: skewY(0deg);
    position: initial;
    letter-spacing: 0;
    color: black;
    padding: 7px;
    flex-direction: row;
    border-radius: 0px 15px 15px 0px;
    margin-bottom: 2px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding-left: 14px;
}
.desc-service2:hover {
    letter-spacing: 1px;
    transition: all .3s ease-out;
    color: #56bf85;
}
.desc-service2:after {
    content: '';
    height: 100%;
    width: 40px;
    background: #ccc url(https://i.imgur.com/t2r2EWN.png) no-repeat;
    background-size: 20px 20px;
    background-position: center;
    border-radius: 0px 15px 15px 0px;
    position: absolute;
    font-size: 20px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
    border: 0;
    outline: 0 none;
    padding: 8px;
    transition: all 0.2s ease-out;
}
.desc-service2:hover:after {
    content: '';
    height: 100%;
    width: 40px;
    background: #56bf85 url(https://i.imgur.com/t2r2EWN.png) no-repeat;
    background-size: 20px 20px;
    background-position: center;
    border-radius: 0px 15px 15px 0px;
    position: absolute;
    font-size: 20px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 0;
    outline: 0 none;
    padding: 8px;
    transition: all 0.2s ease-out;
}
.desc-service_alert {
    margin-top: 10px;
    letter-spacing: 0px;
    border-radius: 0px 20px 20px 0px;
    margin-bottom: 7px;
    transition: all 0.2s ease-out;
    cursor: default;
    text-align: center;
    font-size: 11px;
}

/*ÐŸÐ°Ð³Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ð½*/

.page-link {
    padding: 8px 16px;
    margin-left: 5px;
    background-color: white;
    border-radius: 8px;
    color: black;
}
.page-link:hover, .page-link:focus {
    background-color: #b6b6b6;
    color: white;
}
.page-item.active .page-link {
    color: white;
    background-color: black;
    font-weight: bold;
}
.page-item.disabled .page-link {
    color: black;
    background-color: white;
    opacity: 1;
}
.page-item:last-child .page-link {
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
}
.page-item:first-child .page-link {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
}



@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
} /*KRS CLASSIC*/
.product[href="/products/1170255"] .product__name {
    font-size: 0px;
    right: 10px;
    bottom: 10px;
    text-align: center;
    background: linear-gradient(-45deg, #d0b155, #6cb347, #adc6e9, #adb7e9);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    border-radius: 15px;
    color: white;
}
.product[href="/products/1170255"] .product__name:after {
  	content: "БЕСПЛАТНО";
    font-size: 14px;
}
.product[href="/products/1170255"] .product__discount {
  	display: none;
}
/*KRS X5*/
.product[href="/products/1170408"] .product__name {
    font-size: 0px;
    right: 10px;
    bottom: 10px;
    text-align: center;
    background: linear-gradient(-45deg, #d0b155, #6cb347, #adc6e9, #adb7e9);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    border-radius: 15px;
    color: white;
}
.product[href="/products/1170408"] .product__name:after {
  	content: "БЕСПЛАТНО";
    font-size: 14px;
}
.product[href="/products/1170408"] .product__discount {
  	display: none;
}
/*KRS X10*/
.product[href="/products/1170331"] .product__name {
    font-size: 0px;
    right: 10px;
    bottom: 10px;
    text-align: center;
    background: linear-gradient(-45deg, #d0b155, #6cb347, #adc6e9, #adb7e9);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    border-radius: 15px;
    color: white;
}
.product[href="/products/1170331"] .product__name:after {
  	content: "БЕСПЛАТНО";
    font-size: 14px;
}
.product[href="/products/1170331"] .product__discount {
  	display: none;
}

/*ÐšÐ¸Ð²Ð¸*/

#qiwi-inp-form {
    margin-right: 2%;
}
.oplata_info {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.qiwi-widget-title::selection,#qiwi-donation-amount::selection {
  background:#ff8c00;
}
@media (max-width:767px){
.oplata_info{
    display:grid;
    justify-content:center
}
#qiwi-inp-form {
    margin-bottom:15px
}
}
.qiwi-inp-main {
    display:flex;
    flex-direction:column;
    width:250px;
    height:250px;
    border-radius:50px;
    background-color:#fff;
    position:relative;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box
}
.qiwi-inp-box {
    color:#000;
    margin:0px 30px;
    flex-direction:column;
    position:relative;
    display:flex;
    justify-content:left;
    align-items:center
}
.qiwi-submit-main {
    outline:none !important;
    box-shadow:0 12px 15px 0 rgba(255, 140, 0, .2);
    margin:22px auto 0;
    margin:30px auto 0;
    width:100%;
    height:48px;
    border-radius:100px;
    background-color:#ff8c00;
    line-height:47px;
    font-size:16px;
    font-weight:500;
    text-align:center;
    color:#fff;
    border:none;
    padding:0;
    transform: translate3d(0px, 5px, 0px);
    cursor:pointer;
    overflow:hidden;
    transition: box-shadow 300ms ease 0s, transform 300ms ease 0s;
    text-overflow:ellipsis
}
.qiwi-submit-main:hover {
    transform: translate3d(0px, 0px, 0px);
    transition: box-shadow 300ms ease 0s, transform 300ms ease 0s;
}
.qiwi-inp-other {
    background-color: #fff;
    color: #eceeef;
    align-items: center;
  transition: all 300ms ease 0s;
}
.qiwi-inp-other:hover {
    background-color: #ff8c00;
    color: #ffffff;
    align-items: center;
    transition: all 300ms ease 0s;
}

.qiwi-widget-title2 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 300ms ease 0s;
}
.qiwi-inp-other:hover .qiwi-widget-title2 {
    color: #fff;
    transition: all 300ms ease 0s;
}
.qiwi-inp-other-img {
    width:30%;
    margin-top:15px
}
.qiwi-error-box {
    left:0;
    bottom:-14px;
    height:13px;
    text-align:center
}
.qiwi-button-box {
	padding:0px 23px 23px
}
.qiwi-rub {
    position:absolute;
    right:10px;
    bottom:34%;
    width:12px;
    height:22px;
    opacity:0.5;
    font-size:20px;
    font-weight:300;
    text-align:left;
    color:inherit
}
#qiwi-donation-amount {
    outline:none;
    margin:25px auto 5px;
    width:100%;
    font-size:20px;
    font-weight:300;
    text-align:left;
    color:inherit;
    padding:0 16px 0 0;
    -moz-appearance:textfield;
    -webkit-appearance:none;
    box-sizing:border-box;
    border:0;
    border-bottom:1px solid #d8d8d8;
    box-shadow:none;
    background-color:transparent;
    padding-left:0.8rem
}
#qiwi-donation-amount:focus {
	border-bottom:1px solid #ff8c00
}
.qiwi-label {
    left:13px;
    bottom:44px;
    position:absolute;
    font-weight:300;
    text-align:left;
    color:inherit
}
.qiwi-widget-title {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
}
.qiwi-widget-title p {
    font-size: 14px;
    color: #767676;
    font-weight: 100;
}
.block_by_category:nth-child(3) .kit-items__item {
    width: 50%;
}
.row-skins2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.container-user {
    cursor: pointer;
}
.qiwi-inp-oplata {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 249px;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.container-oplata {
    display: -webkit-inline-box;
    margin-bottom: 15px;
    padding: 16px;
    height: 73px;
    width: 300px;
    border-radius: 12px;
    background: #fff;
    -webkit-box-sizing: border-box;
    text-align: initial;
    transition: all 0.2s ease-out;
    cursor: pointer;
    transform: scale(1);
}
.container-oplata:hover {
    transform: scale(0.95);
}
.container-oplata {
  display: flex;
}
.icon-user-oplata {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 0px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.textContainer-oplata {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-evenly;
}

.container-oplata:nth-child(1) {
  animation: zoomIn 0.6s;
}
.container-oplata:nth-child(2) {
  animation: zoomIn 0.8s;
}
.container-oplata:nth-child(3) {
  animation: zoomIn 1s;
}
.qiwi-inp-oplata {
    animation: zoomIn 0.8s;
}
.name-user {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #23272a;
}
.category-user {
    font-size: 14px;
    line-height: 18px;
    color: #bbb;
}
.x-spoiler > .spoil-Untext {
    -webkit-transition: all 0.2s ease;
    -moz-transition: margin 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: margin 0.2s ease;
}
.x-spoiler >  input + .spoil-box > blockquote{
	display: none;
}
.x-spoiler >  input:checked + .spoil-box > blockquote {
	display: block;
}
blockquote {
    margin: 0 0 0rem;
}
.spoil-button{
	width: 93%;
    height: 45px;
}
.x-spoiler >  input[type="checkbox"] {
	cursor: pointer;
	border-color:transparent!important;
	border-style:none!important;
	background:transparent none!important;
	position: absolute;
  	z-index:1;
	margin: -16px 0 0 0;
    opacity: 0;
 }
.x-spoiler span.spoil-close,
.x-spoiler span.spoil-open{
	padding-left: 2px;
    padding-right: 8px;
	text-decoration: underline;
} 
.x-spoiler span.spoil-close:before{
	content: "\f0ab";

}
.x-spoiler span.spoil-open:before{
	content: "\f0a9";
}
.x-spoiler >  input[type="checkbox"]:focus {
	outline:none;	/* Ð£Ð±Ð¸Ñ€Ð°ÐµÐ¼ Ð¾Ð±Ð²Ð¾Ð´ÐºÑƒ Ð² Ð˜Ð•8 Ð¿Ñ€Ð¸ "Ñ„Ð¾ÐºÑƒÑÐµ" */
}
.x-spoiler >  input +  .spoil-box > span.spoil-close {
	display: none;
}
.x-spoiler >  input:checked +  .spoil-box > span.spoil-close {
	/* //background: url(https://i.imgur.com/UM07ecp.png) 4px 60% no-repeat; */
	display: inline;
    text-decoration: none;
}
.x-spoiler >  input:checked  + .spoil-box > span.spoil-open {
	display: none;
}
.x-spoiler >  input +  .spoil-box >  span.spoil-open {
	/* //background: url(https://i.imgur.com/LYgptyL.png) 4px  60% no-repeat; */
	display: inline;
    text-decoration: none;
}
.x-spoiler blockquote,
.x-spoiler{
    padding:1em;
    border-radius:15px;
    -webkit-border-radius:15px;
    -khtml-border-radius:15px;
    -moz-border-radius:15px;
    -o-border-radius:15px;
    -ms-border-radius:15px;
}
.x-spoiler {
    overflow-x: hidden;
    margin-bottom: 10px;
    background: white;
}
.x-spoiler blockquote {
    margin-top: 12px;
    min-height: 23px;
    background: #e9eaec;
}
.btn-skins {
    text-align: center;
    display: grid;
}
.btn-skin {
    border-radius: 25px;
    cursor: pointer;
    color: white;
    background: #9ec483;
    border: unset;
    border-color: unset;
    outline: none !important;
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    letter-spacing: 0px;
    transition: all 0.2s ease-out;
}
.btn-skin:hover {
    transition: all 0.2s ease-out;
    color: white;
    letter-spacing: 3px;
}
.btn-skin:focus {
    transition: all 0.2s ease-out;
    color: white;
    letter-spacing: 3px;
}
.spoil-box {
  color: #909090;
}
.x-spoiler:nth-child(2) .spoil-box {
  color: #c48a83;
}
.x-spoiler:nth-child(3) .spoil-box {
  color: #9ec483;
}
.spoil-head {
  color: #909090;
}
.spoil-Untext {
  color: #909090;
}
.row-skins {
    display: flex;
    flex-direction: row;
}

.container-user {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 364px;
    margin-left: 0px;
    margin-right: 10px;
    padding: 16px;
    border-radius: 12px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: initial;
    transition: all 0.2s ease-out;
    cursor: pointer;
}
.container-user:hover {
    transform: translate3d(0px, 5px, 0px);
}
.icon-user {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 30px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.textContainer-user {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.name-user {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #23272a;
}
.category-user {
    font-size: 14px;
    line-height: 18px;
    color: #bbbbbb;
}

.container-user1 {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 364px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 16px;
    border-radius: 12px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: initial;
    transition: all 0.2s ease-out;
}
.container-user1:hover {
    transform: translate3d(0px, 5px, 0px);
}
.icon-user1 {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 30px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.textContainer-user1 {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.name-user1 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #23272a;
}
.category-user1 {
    font-size: 14px;
    line-height: 18px;
    color: #bbbbbb;
}
@media (max-width: 423px)
{
.row-skins {
    display: contents;
    flex-direction: row;
}
}
@media (max-width: 423px)
{
.container-user {
    display: flex;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    padding: 16px;
    width: unset;
    border-radius: 12px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: initial;
    overflow-x: hidden;
}
}
@media (max-width: 423px)
{
.container-user1 {
    display: flex;
    margin-left: 0px;
    margin-right: 0px;
    padding: 16px;
    width: unset;
    border-radius: 12px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: initial;
    overflow-x: hidden;
}
}

/*ÐÐ²Ð°Ñ‚Ð°Ñ€*/

.avatar {
    height: 64px;
    width: 64px;
    border-radius: 15px;
}
.avatar {
  transform: scale(1);
  transition: all 220ms ease-out;
}
.avatar:hover {
  transform: scale(0.9);
  transition: all 220ms ease-out;
}
.avatar {
  animation: zoomIn 1s;
}
.avatar {
    background: #dfdfdf;
}

/*Jopa*/

.server-map__image {
    background: #ffffff;
    border-radius: 15px;
    padding: 15px;
}

.s-alert-top-right {
    top: 45px;
    right: 12px;
    bottom: auto;
    left: auto;
}

.s-alert-box {
    border-radius: 15px;
    font-family: 'Open Sans', Roboto, sans-serif;
    font-weight: 100;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.s-alert-box {
   border-radius: 15px;
   color: white;
}

.s-alert-success { 
   border-radius: 15px;
   color: white;
   background-image: url('https://i.imgur.com/kHHOuVK.png');
   background-repeat: no-repeat;
   background-size: 200px;
   background-position: 30% 50%;
   background-origin: content-box;
}

/*Player*/

.xbox_player .xbox__footer {
    margin-top: 10px;
}
.xbox_player .xbox__header {
    margin-bottom: 0px;
}
.xbox_profile .table-wrapper, table {
    border-radius: unset;
    overflow: hidden;
}
.player-stats__playerKills .table {
	border-radius: 15px 15px 0px 0px;
}
.player-stats__resources .table {
	border-radius: 0px 0px 15px 15px;
}
.player-stats__animalKills, .player-stats__deaths, .player-stats__entities, .player-stats__navigation, .player-stats__playerKills {
    margin-bottom: 4px;
}
.player-stats__navigation {
    margin-bottom: 10px;
}
.player-stats__profile {
    margin-bottom: 20px;
    padding: 15px;
    background: white;
    border-radius: 0px 0px 15px 15px;
}
.player-stats__navigation .nav-link:first-child {
    border-radius: 15px 0px 0px 15px;
}
.player-stats__navigation .nav-link:last-child {
    border-radius: 0px 15px 15px 0px;
}
.player-stats__navigation .nav-link:hover, .nav-link:focus, .nav-link:active {
    letter-spacing: 0px;
}
.player-stats__navigation .nav-pills .nav-link.active {
    letter-spacing: 0px;
}
.player-stats__profile .table-striped tbody tr, .player-stats .table-striped tbody tr {
    line-height: 16px;
}
.player-stats__profile table {
    border-radius: 15px;
}
.player-stats__profile .table td {
    vertical-align: middle;
    padding: 5px;
}
.player-stats__avatar img {
    width: 183px;
    height: 183px;
    border-radius: 15px;
}
.player-stats .table > thead > tr > th {
    background-color: white;
    text-align: center;
    color: black;
}
.player-stats__animalKills>table>thead>tr>th:hover, .player-stats__deaths>table>thead>tr>th:hover, .player-stats__entities>table>thead>tr>th:hover, .player-stats__playerKills>table>thead>tr>th:hover, .player-stats__resources>table>thead>tr>th:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    text-align: center;
}
.player-stats .table th {
    vertical-align: middle;
    padding: 20px;
}

@media (max-width: 767px)
{
.player-stats__navigation .nav-link:first-child {
    border-radius: 15px 15px 0px 0px;
}
}
@media (max-width: 767px)
{
.player-stats__navigation .nav-link:last-child {
    border-radius: 0px 0px 15px 15px;
}
}

.player-stats__playerKills .table > thead > tr > th:before {
    font-family: FontAwesome;
    content: "\f0c0";
	margin-right: 5px;
}
.player-stats__animalKills .table > thead > tr > th:before {
    font-family: FontAwesome;
    content: "\f1b0";
	margin-right: 5px;
}
.player-stats__deaths .table > thead > tr > th:before {
    font-family: FontAwesome;
    content: "\f235";
	margin-right: 5px;
}
.player-stats__entities .table > thead > tr > th:before {
    font-family: FontAwesome;
    content: "\f1b3";
	margin-right: 5px;
}
.player-stats__resources .table > thead > tr > th:before {
    font-family: FontAwesome;
    content: "\f080";
	margin-right: 5px;
}

.xbox_player .btn-secondary {
    background: #f3f4f6;
    display: block;
    border-radius: 15px;
    color: black;
    font-weight: bold;
    padding: 10px;
    border: dashed 1px black;
	transition: all 0.3s;
}	
.xbox_player .btn-secondary:hover {
	color: black;
	background: white;
	border: dashed 1px white;
	transition: all 0.3s;
}
.xbox_player .btn-secondary:before {
    font-family: FontAwesome;
    content: "\f060";
	margin-right: 5px;
}
.xbox_profile .table {
    margin: 0;
    border-radius: 15px;
}
.btn-danger, .btn-danger:hover, .btn-danger:focus, .btn-danger:active {
    border: unset;
}
.xbox_profile .table th {
    vertical-align: middle;
    padding: 20px;
}

























.xbox_rules {
    text-transform: uppercase;
    text-align: center;
    color: #cccccc;
    border-radius: 15px;
}
.rules {
  font-weight: 100;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 0px;
  background: white;
  color: black;
  transition:all 0.2s ease-in-out;
  letter-spacing: 0px;
}
.rules:first-child {
  border-radius: 15px 15px 0px 0px;
}
.rules:last-child {
  border-radius: 0px 0px 15px 15px;
}
.rules:hover {
  background: black;
  transition:all 0.2s ease-in-out;
  color: white;
  letter-spacing: 2px;
}







































/*Poexalo*/

.MsoNormal {
   font-weight: bold;
   font-size: 20px;
}

@media (min-width:767px){.modal-lg-block{max-width:1050px !important}}@media (max-width:767px){.xbox_custom_block .kit-items{display:block}
.xbox_custom_block .kit-items__item{width:50% !important}.block_by_category{width:100% !important;height:auto !important}}
.block_by_category .kit-item{margin-bottom:-2px}.xbox_custom_block .kit-items__item{width:80%;margin-bottom:0px;display:inline-flex}
.block_by_category{width:13%;}
.block_category_1{border-radius: 20px 0px 0px 20px;background-color:rgba(156, 206, 111, 0.5);}
.block_by_category:before{text-transform: uppercase;display:block;width:100%;text-align:center;font-size:25px;color: #e9eaec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.block_category_1:before{border-radius: 20px 0px 0px 20px;background:#9cce6f;content:"2 ЧАСА";font-size: 20px;}
.block-lvl-1{background:#d2d242}.block_category_2{background-color:rgba(187, 219, 111, 0.5)}
.block_category_2:before{background:#bbdb6f;content:"4 ЧАСА";font-size: 20px;}
.block-lvl-2{background:#385ad2}.block_category_3{background-color:rgba(212, 219, 111, 0.5)}
.block_category_3:before{background:#d4db6f;content:"6 ЧАСОВ";font-size: 20px;}
.block-lvl-3{background:#d23838}.block_category_4{background-color:rgba(219, 206, 111, 0.5)}
.block_category_4:before{background:#dbce6f;content:"10 ЧАСОВ";font-size: 20px;}
.block-lvl-4{background:#38d27c}.block_category_5{background-color:rgba(219, 191, 111, 0.5)}
.block_category_5:before{background:#dbbf6f;content:"18 ЧАСОВ";font-size: 20px;}
.block-lvl-5{background:#38d2a0}.block_category_6{background-color:rgba(219, 151, 111, 0.5)}
.block_category_6:before{background:#db976f;content:"24 ЧАСА";font-size: 20px;}
.block-lvl-6{background:#aa69c5}.block_category_7{background-color:rgba(219, 116, 111, 0.5);border-radius: 0px 20px 20px 0px;}
.block_category_7:before{border-radius: 0px 20px 20px 0px;background:#db746f;content:"28 ЧАСОВ";font-size: 20px;}
.block-lvl-7{background:#dc9e2d}

.block_by_category:nth-child(5) .kit-items__item, .block_by_category:nth-child(6) .kit-items__item {width: 100%;}
.block_by_category:nth-child(3){width:17%}.block_by_category:nth-child(3) .kit-items__item{width:50%}
.block_by_category:nth-child(6){width:17%}.block_by_category:nth-child(6) .kit-items__item{width:50%}
.block_by_category:nth-child(5){width:10%}

.xbox_custom_block {
  text-align: center;
}

.block_category_1 .kit-item {
  background: #9cce6f !important;
}

.block_category_2 .kit-item {
  background: #bbdb6f !important;
}

.block_category_3 .kit-item {
  background: #d4db6f !important;
}

.block_category_4 .kit-item {
  background: #dbce6f !important;
}

.block_category_5 .kit-item {
  background: #dbbf6f !important;
}

.block_category_6 .kit-item {
  background: #db976f !important;
}

.block_category_7 .kit-item {
  background: #db746f !important;
}

.block_category_8 .kit-item {
  background: #000000 !important
}

.block_by_category .kit-item {
    position: relative;
    background: #e9eaec;
    margin: 8px;
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    box-shadow: unset;
    animation: zoomIn 1s;
}

.xbox_custom_block .kit-items {
  border-radius: 20px;
}

.store-categories .btn-secondary {
    color: black;
    background: white;
    border-color: transparent;
    outline: none !important;
}

.store-categories .btn-secondary:hover {
    color: white;
    background: black;
    border-color: transparent;
    outline: none !important;
}

.store-categories .btn-secondary.active, .store-categories .btn-secondary:active, .show > .store-categories .btn-secondary.dropdown-toggle {
    color: white;
    background: black;
}

.serverheader {
    color: #bbbbbb;
    border-radius: 15px;
    margin-bottom: 10px;
    font-size: 20px;
}

.serverheader span {
    background: #d4d4d4;
    padding: 2px 12px 2px 12px;
    border-radius: 20px;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
}

.serverheader span:before {
    font-family: FontAwesome;
    content: '\f017';
    font-weight: 100;
    margin-right: 5px;
}

@media (max-width: 380px)
{
.serverheader {
    font-size: 15px;
}
}

.modal-kit .modal-content, .modal-info .modal-content {
    width: unset;
}

.kit-item_blueprint .kit-item__image {
    background: url(https://i.imgur.com/tXpilqO.png);
    background-size: cover;
}
.kit-item_blueprint .kit-item__name {
    display: none;
}

.kit-item {
    position: relative;
    background: white;
    margin: 8px;
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
	transform: rotate(0deg);
    transition: all 0.3s;
	box-shadow: unset;
}

.kit-item:hover {
    transform: scale(1.04) rotate(-5deg);
    transition: all 0.3s;
	box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.1);
}

.kit-item__name, .kit-item__quantity {
    position: absolute;
    color: #e0e0e0;
    font-size: 17px;
}

.kit-item__quantity {
    background: none;
}

@media (max-width: 1000px)
{
.kit-items__item {
    width: 30%;
}
}

@media (min-width: 992px)
{
.kit-items__item {
    width: 20%;
}
}

@media (max-width: 500px)
{
.kit-items__item {
    width: 50%;
}
}



@media (min-width: 1200px)
{
.xbox_custom_kits .kit-items__item {
    width: 12.5% !important;
}
}

@media (max-width: 1000px)
{
.xbox_custom_kits .kit-items__item {
    width: 30%;
}
}

@media (min-width: 992px)
{
.xbox_custom_kits .kit-items__item {
    width: 20%;
}
}

@media (max-width: 500px)
{
.xbox_custom_kits .kit-items__item {
    width: 50%;
}
}

.kit-item__image {
    width: 100%;
    transform: scale(0.7);
}

.kit_set .kit-item__quantity {
    background: unset;
    color: black;
    font-size: 14px;
    padding: 0px 0px 5px 0px;
    margin-top: -15px;
    border-radius: 0px;
}
.kit_set .kit-item__quantity {
    position: unset;
}

.xbox_custom_kits {
	margin-top: 20px;
}


/*ÐŸÑ€Ð¾Ñ‡ÐµÐµ*/


.server-description {
    padding: 0px !important;
  	text-align: start !important;
}

@media (max-width: 994px)
{
.footer-link__list {
    margin-bottom: 18px;
}
}

.product__servers {
    display: none;
}
.sk-spinner-wave div {
    background-color: black;
}

.xbox_custom_rules {
  color: black;
}

.xserver__links a {
    margin-top: 1px!important;
}
.xserver__links {
    margin-top: -30px !important;
    color: white;
}
.xserver:last-child {
    display: none !important;
}

.avatar {
    background: #dfdfdf;
}

.xbox_player .xbox__header {
    display: block !important;
}

.fa-play {
    margin-top: 0px !important;
}


.ip-adress{border-radius:15px;padding:10px;margin-bottom:10px;background:linear-gradient(-45deg, #69b7eb, #b3dbd3, #f4d6db);background-size:400% 400%;animation:gradient 5s ease infinite;font-size:20px;color:white;text-align:center}
.ip{user-select:all;letter-spacing:2px;font-size:18px;text-align:center;cursor:pointer}
.server-address{display:none}
.xserver__status{padding-right:0px !important}
.fa-play{display:none}

//правила текст 

.unban {
    border: solid #ebebeb 1px
}

.unbanwarn {
    background: #f3f4f6;
    color: #909090;
    padding: 1em;
    border-radius: 10px;
    margin-top: 10px
}
.xbox_custom_rules p {
    margin-bottom: 10px
}

.rules_rule {
    color: #858585;
    background: #fff;
    border-radius: 5px;
    font-size: 14px;
    padding: 2px 5px 2px 5px;
    box-shadow: 0px 4px 13px -5px rgba(0, 0, 0, 0.20)
}

.rules_rule_two {
    color: #858585
}

.rules_rule_two p {
    margin-bottom: 5px
}

.rules_rule_two p:last-child {
    margin-bottom: 0px
}
//префиксы
.pd-additional {
    display: flex;
    align-items: center;
  	justify-content: center;
  	color: #5b8cc3;
  	background: #e5ebf1;
    font-size: 14px;
    z-index: 3;
    //width: 30px;
    height: 30px;
  	border-radius: 10px;
  	padding: 0px 12px;
	user-select: none;
  	cursor: pointer;
	transform: scale(1);
  	transition: all 100ms ease-out;
}
.pd-additional:hover {
    color: #4c82bf;
    background: #d5e0eb;
}
.pd-additional:active {
    transform: scale(0.9);
}
//промо-кол приписка
.xbox_promocodes:after {
    content: 'Промокоды появляются только в нашем телеграм канале.';
    color: white;
    width: 100%;
    display: flex;
    margin-top: 10px;
    border-radius: 15px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: linear-gradient(-45deg, #69b7eb, #b3dbd3, #f4d6db);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    font-size: 20px;
    padding: 10px
}

.modal-content .input-group-addon:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 20px;
    background: #ebebeb;
    left: 52px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10
}
//описание
.pd-item .tooltiptext1 {
    visibility: hidden;
    width: 240px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: left;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    left: 105%;
  	opacity: 0;
    transition: opacity 220ms ease-out;
}
.pd-item .tooltiptext1::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent;
}
.pd-item:hover .tooltiptext1 {
    visibility: visible;
  	opacity: 1;
}
.tooltip1:hover .tooltiptext1 {
    visibility: visible;
  	opacity: 1;
}
@media (max-width: 610px)
{
.pd-item .tooltiptext1 {
    visibility: hidden;
    width: 170px;
    background-color: rgba(0, 0, 0, 0.3);
  	backdrop-filter: blur(5px);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 10px;
  	position: absolute;
    z-index: 5;
    bottom: 0%;
    left: 30%;
  	opacity: 0;
  	margin-left: 20px;
    transition: opacity 220ms ease-out;
}
}


@media (max-width: 610px)
{
.pd-item .tooltiptext1::after {
    border-color: transparent transparent transparent transparent;
}
}
