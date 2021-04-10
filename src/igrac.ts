export class Igrac{
    private ime:string;
    private brojDresa:number
    private brojPogodjenih:number
    constructor( ime: string, brojDresa:number, brojPogodjenih:number)
    {
        this.ime=ime;
        this.brojDresa=brojDresa;
        this.brojPogodjenih=0;
    }

    getIme(){
        return this.ime;
    }

    getBrojDresa(){
        return this.brojDresa;
    }

    getBrojPogodjenih()
    {
        return this.brojPogodjenih;
    }

    setBrojPogodjenih(brojPogodjenih:number)
    {
        this.brojPogodjenih=brojPogodjenih;
    }

    trci(){
        return new Promise<Igrac>((resolve, reject)=>{
            setTimeout(()=>{
                this.setBrojPogodjenih((Math.random()*10 + 20));
                resolve(this);
            },3000);
        });
    }
}