import React from 'react'
import './Form.css'

export default function () {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label className='labelForm'>CARDHOLDER NAME</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                
                <div class="form-group">
                    <label className='labelForm'>CARD NUMBER</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="**** **** **** ****" />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
