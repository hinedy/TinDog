class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogCardHtml(){
        const { name, age, bio } = this
        return `           
                <h3 class="dog-details">${name}, ${age}</h3>
                <p class="dog-bio">${bio}</p>       
        `
    }
    getBadgeHtml(){
        if(this.hasBeenSwiped){
            if(this.hasBeenLiked){
                return `<img src="images/badge-like.png">`
            }else{
                return `<img src="images/badge-nope.png">`
            }
        }else {
            return ""
        }
    }
    getDogHtml(){
        return ` 
            <div class="dog-card" id="dog-card">
                 ${this.getDogCardHtml()} 
            </div> 
            <div class="badge">
                ${this.getBadgeHtml()}
            </div> 
        `
    } 
    
}

export default Dog