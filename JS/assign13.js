var hotel = new Object();
hotel.name = 'lemon tree';
hotel.rooms = 300;
hotel.booked = 120;
hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};
var elName = document.getElementsByName('hotelName');
elName.textContent = hotel.name;
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
