import React from "react";

export default function Home (){
  return (
    <div className="Home">
      <div className="home--content center-container">

         <section className="home--form">
               <h1> Search for places to stay in Bergen </h1>
               <form className="home--form__section">
                 <div>
                   <input type="text" placeholder="search for hotel" name="search" />
                 </div>
                 <div>
                  <input type="date"  placeholder="checkinn" name="check-out" />
                 </div>
                 <div>
                  <input type="date"  placeholder="checkout" name="check-inn" />
                 </div>
                 <div>
                  <input type="submit"  name="submit" />
                 </div>
               </form>
          </section>
      </div>
    </div>
  )
}
