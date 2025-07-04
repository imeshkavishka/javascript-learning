var paybill={
    bill :[],
    tip : [],
    final : [],
    caltip : function(){
        for (var i=0; i<this.bill.length; i++){
            var tp;
            if(this.bill[i]<1000){
                tp =20/100;
            }
            else if(this.bill[i]<1500 && this.bill[i]>=1000){
                tp = 15/100;
            }
            else{
                tp = 10/100;
            }
            this.tip[i] = this.bill[i] * tp;
            this.final[i] = this.bill[i] + this.tip[i];
        }
    }
}

for(var i=0; i<5; i++){
    paybill.bill[i] = parseInt(prompt("Enter the bill amount  :" ));
}

billpay.caltip();
console.log(billpay);