// console.log('dinh thanh tai');
// var name = 'tai';
// var numbers = 2;
// function chaythu(){
//     console.log('dinh thanh tai <3 duong thi hong hanh');
// }

// các học viên trong khóa học 

// var MembersTK = ['tài', 'liêm', 'mai', 'thọ', 'linh', 'lan', 'huy', 'hiền' , 'N.linh', 'hạnh', 'M.linh', 'lộc', 'luật', 'trung', 'hân', 'quang'];
// for(var i = 0; i < MembersTK.length; i++){
//     console.log(MembersTK[i]);
// }

// cach 2:
// var MembersTK = [];
// MembersTK[0] = 'liêm';
// MembersTK[1] = 'tài';
// MembersTK[2] = 'hạnh';
//cach 3:
// var MembersTK = new Array('tai', 'hạnh', 'liêm');
// console.log(MembersTK[0]);
// console.log(MembersTK[1]);
// console.log(MembersTK[2]);
// Objects
// var membersTK = {
//     ten : 'tài',
//     ho : 'dinh',
//     tuoi: 20, 
//     chieucao : 'm68',
//     cangnang : '60kg',
//     tendaydu : function(){ return this.ten + " " + this.ho;}
// }
// for (var x in membersTK) {
//     console.log(membersTK[x]);
// }
// string 
var name = 'dinh thanh tai';
// console.log(name.length);
// var tk = name.indexOf('tai');
// console.log(tk);
// if(tk != -1){
//     console.log('tim thay');
//     var moi = name.replace('tai', 'hạnh')
//     console.log(moi);
// }
// else{
//     console.log('khong tim thay');
// }
var moi = name.split(' ');
console.log(moi);

