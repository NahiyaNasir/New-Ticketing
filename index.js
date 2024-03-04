

// get all elements by id
 const seatButtons=document.getElementsByClassName('seatButton')
 const append =document.getElementById('appended-section')
 //const   inputCoupon=document.getElementById('input-coupon')
 const couponButton=document.getElementById('apply')
 const totalPrice=document.getElementById('total-price')
 const grandTotal=document.getElementById('grand-total')
 const next=document.getElementById('next')
 let seatCount=0
 let total=0;
let count=0
   for (const seat of  seatButtons) {
      seat.addEventListener('click', function(){
         console.log('clicked')
         if(seatCount<4){
            seat.classList.add('btnColorChanged')
            seat.classList.add('text-white')
            seat.classList.remove('bg-[#F7F8F8]')
            seat.classList.remove('hover:bg-[rgb(148,163,184)]')
            seat.setAttribute('disabled', '')
            seatCount=seatCount+1
          // document.getElementById('selected-seat-count').innerText=seatCount
         getIdByValue('selected-seat-count', seatCount)

            const seatLeft=document.getElementById('remaining-seat').innerText
            const remaining=seatLeft-1
           // console.log(remaining)
           getIdByValue('remaining-seat',remaining)
           //append section
    const div=document.createElement('div')
     div.classList.add("flex" ,"justify-between")
         const p1=document.createElement('p')
         p1.innerText=     seat.innerText
    const p2=document.createElement('p')
   p2.innerText='Economy'
     const p3=document.createElement('p')
  p3.innerText='550'
  div.append(p1)
  div.append(p2)
  div.append(p3)
  append.appendChild(div)

  //total price
  const perTicket=document.getElementById('ticket-price-per-seat').innerText
   total +=parseInt(perTicket)
   console.log(total)
   totalPrice.innerText=total
   //grand total
   grandTotal.innerText=total

         }
         else{
            alert('you cannot select more')
         }
         
      

         




   
      })
}

   
   




   couponButton.addEventListener('click', function(){
      console.log('click');
  
      const coupon15 = document.getElementById('new15').value;
      const coupon20 = document.getElementById('couple20').value;
      const inputCouponValue = document.getElementById('input-coupon').value 
    //  const couponCode=inputCouponValue.toUpperCase()
    //  console.log(couponCode)
        const hide=document.getElementById('hide-coupon')
     
//totalPrice.innerText=total
  
      if(inputCouponValue === 'NEW15' ){
         totalPrice.innerText=total
          const grandNew =total * 1.5;
          const grandFinal = total - grandNew;
          console.log(grandFinal);
          grandTotal.innerText= grandFinal
          hide.classList.add('hidden')
          couponButton.removeAttribute('disabled','');
        
  }  else if(inputCouponValue === 'Couple 20'){
   const grandCouple=total*0.2
   const grandFinal2=total-grandCouple
   console.log(grandFinal2)
   grandTotal.innerText=grandFinal2
        hide.classList.add('hidden')
   couponButton.removeAttribute('disabled','');
  } else{
   alert(' invalid coupon')
  }

         


        
  
          
      }
  );
  











function getIdByValue(id, value){
    const element=document.getElementById(id)
    element.innerText=value
}