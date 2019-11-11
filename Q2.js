let ConvertToSecond=function ConvertToSecond(Hours,Second){
    this.Hours=Hours;
    this.Second=Second;
    console.log((3600*Hours)+(60*Second)+" Second");
}
ConvertToSecond(3,5);
ConvertToSecond(7,15);

