var names=new Array();
names[0]="Yaakov";
names[1]="Miha";
names[2]="Mihael";
names[3]="Mihalina";
names[4]="misha";
names[5]="bogdan";
names[6]="anton";
names[7]="polina";
names[8]="viktor";
names[9]="misha";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='M'|| names[i].charAt(0)==='m'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}