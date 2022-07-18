<script>
 import "../assets/style.scss";
    export default  {
    data(){
        return {
            show:true
        }
    },
    methods: {
        closeModal () {
            this.show = !this.show
        },
        makePayment() {
            FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-65e868e82e230d0a25b88a2a1eb0e29a-X",
            tx_ref: "test-48981487343MDI0NzMx",
            amount: 25.00,
            currency: "USD",
            payment_options: "card, mobilemoneyghana, ussd",
            callback: function(payment) {
                verifyTransactionOnBackend(payment.id);
            },
            onclose: function(incomplete) {
                if (incomplete || window.verified === false) {
                document.querySelector("#payment-failed").style.display = 'block';
                } else {
                document.querySelector("form").style.display = 'none';
                if (window.verified == true) {
                    document.querySelector("#payment-success").style.display = 'block';
                } else {
                    document.querySelector("#payment-success").style.display = 'block';
                }
                }
            },
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "chinwenduonuoha00@gmail.com",
                phone_number: "08161568876",
                name: "Chinwendu Onuoha",
            },
            customizations: {
                title: "The Writers Blog",
                description: "Payment to upload blog as a writer",
                logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
            });
        },

        verifyTransactionOnBackend(transactionId) {
            setTimeout(function() {
            window.verified = true;
            }, 10);
        }
    },
    mounted() {
    let Script = document.createElement("script");
    Script.setAttribute("src", "https://checkout.flutterwave.com/v3.js");
    document.head.appendChild(Script);
  }
}
</script>

<template>
<Transition name="modal">
    <div id="payment-failed" >
    <div v-if="this.show" className="modal-mask">
        <div className="modal-container">
          <div className="modal-header">
            <slot name="header">Payment Failed</slot>
          </div>

          <div className="modal-body">
            <slot name="body"> Uh-oh. Please try again, or contact support if you're encountering difficulties making payment.</slot>
          </div>

          <div className="modal-footer">
            <slot name="footer">
            
              <button
                className="modal-default-button"
                @click="closeModal()"
              >OK</button>
            </slot>
          </div>
      </div>
    </div>
    
        </div>
    
  </Transition>
       
        <br>
    <form>
        <button type="button" class="start-payment-button" @click="makePayment()">JOIN US</button>
    </form>
    <Transition name="modal">
    <div id="payment-success">
        <div v-if="this.show" className="modal-mask">
        <div className="modal-container">
          <div className="modal-header-success">
            <slot name="header">Payment Successful</slot>
          </div>

          <div className="modal-body">
            <slot name="body"> Successful! Enjoy blogging!</slot>
          </div>

          <div className="modal-footer">
            <slot name="footer">
            
              <button
                className="modal-default-button"
                @click="closeModal()"
              >OK</button>
            </slot>
          </div>
      </div>
    </div>
    </div>
    </Transition>
    <div id="payment-pending">
        Verifying...
    </div>  
</template>