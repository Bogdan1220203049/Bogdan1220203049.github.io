var names=new Array();
names[0]="jekob";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="jasck";
names[5]="franch";
names[6]="lipton";
names[7]="paula";
names[8]="laura";
names[9]="jem";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}