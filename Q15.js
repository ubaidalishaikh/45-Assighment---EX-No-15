"use strict";
let guest_list = ['WASAY', 'UBAID', 'DANIYAL'];
for (let index = 0; index < guest_list.length; index++) {
    console.log('Respected Sir/Madam :' + guest_list[index] + '\n We invited you on dinner tommorow.\nThank You For Invite \n');
}
let not_present = "WASAY";
let new_guest = 'HUZAIFA';
guest_list[0] = new_guest;
for (let index = 0; index < guest_list.length; index++) {
    console.log('Respected Sir/Madam :' + guest_list[index] + '\n We invited you on dinner tommorow.\n Thank You For Invite');
}
