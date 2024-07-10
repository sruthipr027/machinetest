import React, { useState } from 'react'

function Main() {

    const [show , setShow]= useState()
    const [plus , setPlus] = useState(false)
    const [section , setSection ] = useState()
    const [context , setContext] = useState(false)
    const [cost , setCost] = useState(false)

  return (
    <div>
       <div className='d-flex bg-light'>
       <aside style={{height:'100vh' }} className='bg-warning w-25'></aside>
      { ! show ?(<div  style={{backgroundColor:'white' , height:'200px' , borderRadius:'10px'}} className='d-flex align-items-evenly justify-content-between  m-5 p-5 w-75'>
        <div >
            <p>STEP 1/3</p>
            <h1>Cost Identification</h1>
            <p>Identify and categorize the various costs influencing margins.</p>

        </div>
        <div>
            <p>4 Prompts | 5 mins</p>
            <button onClick={()=> setShow(true)} className='btn btn-light text-primary p-4'>Get started <i class="fa-solid fa-greater-than"></i> </button>

        </div>
        
       </div>) :

       <div style={{backgroundColor:'white' , height:'auto' ,borderRadius:'10px'}} className='d-flex m-5 p-5 w-75 '>
        <div>
        <p><b>Step 1</b></p>
            <h5><b>Cost Identification</b></h5>
            <p className='fs-s'>Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue –
                 for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy
                  business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).</p>
                  <hr />
                { ! plus?(<div className='d-flex align-items-evenly justify-content-between'>
                 <div>
                    <span className='text-secondary'>Question 1 out of 3</span>
                    <h5>What are the primary components of variable & semi-variable costs impacting gross margins?</h5>
                  </div>
                  <div><button onClick={()=>{setPlus(true)}} className='btn btn-light rounded'><i class="fa-solid fa-plus"></i></button></div>
                 </div>):
                 <div className=''>
               <div className='d-flex'>
               <div>
                    <span className='text-secondary'>Question 1 out of 3</span>
                    <h5>What are the primary components of variable & semi-variable costs impacting gross margins?</h5>
                  </div>
                  <div><button onClick={()=>{setPlus(false)}} className='btn btn-light rounded'><i class="fa-solid fa-minus"></i></button></div>
               </div>

           <div className='d-flex'>
          
            
                {!section? (
                    <div className='d-flex'>
                     <button onClick={()=>{setSection(true)}} className=' btn btn-info p-2 rounded text-primary fs-xs' style={{backgroundColor:'light-blue'}} >
                         <i class="fa-solid fa-arrow-right"></i> need more clarification on this section?
                 <i class="fa-solid fa-circle-plus ms-5"></i>
                 </button>
                 <div>
                    <div  className="d-flex ms-3">
                    <button onClick={()=>{setSection(true)}} className=' btn btn-info p-2 rounded text-primary' style={{backgroundColor:'light-blue'}} >
                    <i class="fa-solid fa-wand-sparkles"></i> need more clarification on this section?
                 <i class="fa-solid fa-circle-plus ms-5"></i>
                 </button>
                    </div>
                 </div>
           </div>
           
           
           ):

               
               (  <div>
                    {/*  <button className=' btn btn-info p-2 rounded' style={{backgroundColor:'light-blue'}} > <i class="fa-solid fa-arrow-right"></i> need more clarification on this section?   <i class="fa-solid fa-circle-plus"></i>
                     </button>
                     <button className='btn btn-light rounded'>How do I connect this to my business context?
                     </button> */}

                     <section style={{backgroundColor:'lightblue' , width:'800px' , borderRadius:'10px' , height:'300px'}} className=' '>
                        <div className='d-flex align-items-evenly justify-content-between '>
                        <div>
                        <button className='btn border-0 p-2 text-primary'> <i class="fa-solid fa-arrow-right"></i> need more clarification on this section?  </button>

                        </div>
                        <div><button className='btn ' onClick={()=>{setSection(false)}}><i class="fa-solid fa-circle-minus"></i></button>

                        </div>
                        </div>

                      { !context? (<div className='bg-light mt-3 m-3 p-2 ' style={{width:'450px' , borderRadius:'30px'}} >
                            <i class="fa-solid fa-binoculars ms-2 me-2" ></i> How do I connect this to my business context?
                             <button onClick={()=>{setContext(true)}} className='btn'>
                                 <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                                 </button>
                                  </div>):
                       ( <div className='d-flex align-items-center justify-content-between m-2 p-2  '>
                           <div className='bg-light p-2' style={{borderRadius:'10px'}}> <i class="fa-solid fa-binoculars" ></i> How do I connect this to my business context?
                           <button style={{marginLeft:'10px' , float:'right'}} onClick={()=>{setContext(false)}} className='btn'>
                            <div className='d-flex ' >
                            <i class="fa-solid fa-rotate-right me-2"></i><i class="fa-solid fa-up-right-and-down-left-from-center"></i>

                            </div>
                                 </button>
                         <div className='d-flex  align-items-evenly justify-content-between'>
                          <div style={{backgroundColor:'lightblue' , borderRadius:'10px'}} className='p-2 m-2 d-flex  align-items-evenly justify-content-between'>
                           
                            <div style={{backgroundColor:'lightblue',borderRadius:'10px'}} className='p-2 m-2'>
                              <div className='d-flex'>
                                    <p style={{fontSize:'10px'}}><i class="fa-solid fa-layer-group"></i>Add raw materials costs as variable costs</p>
                                    <button onClick={()=>{setCost(false)}} style={{marginTop:'-15px' , float:'right'}}  className='btn'><i class="fa-solid fa-angle-down "></i></button>
                                </div>
                                <div style={{fontSize:'15px'}}>Energy and Utility costs are Lorem ipsum dolor sit amet...</div>

                               <div>hi</div>
                             
                              </div>

                              
                                
                                
                             
                              </div>
                             
                             
                             
                              <div style={{backgroundColor:'lightblue' , borderRadius:'10px'}} className='p-2 m-2 d-flex  align-items-evenly justify-content-between'>
                          
                            <div style={{backgroundColor:'lightblue',borderRadius:'10px'}} className='p-2 m-2'>
                              <div className='d-flex'>
                                    <p style={{fontSize:'10px'}}><i class="fa-solid fa-layer-group"></i>Add raw materials costs as variable costs</p>
                                    <button style={{marginTop:'-15px' , float:'right'}}  className='btn'><i class="fa-solid fa-angle-down "></i></button>
                                </div>
                                <div style={{fontSize:'15px'}}>Energy and Utility costs are Lorem ipsum dolor sit amet...</div>
                             
                              </div>
                                
                                
                             
                              </div>
                          </div>

                          





                            </div>
                            </div> 
                           )}
                        
                     </section>
                 </div>)}
           </div>
            <div>

            </div>
                </div>}


        </div>
        <div>
            <button onClick={()=> setShow(false)} className='btn btn-light rounded'><i class="fa-solid fa-angle-up"></i></button>

        </div>



       </div>}

       </div>

       
        


    </div>
  )
}

export default Main