const App = {
    data() {
        return {
            month: "",
        };
    },
    /*methods : {
        onSubmit(e){
            e.preventDefault()
            if(!this.month){
                alert('choisissez un mois')
                return
            }
            this.$emit(this.month[0])
            this.$emit(this.month[1])
        },
    }*/
    
};
const app = Vue.createApp(App);
app.use(ElementPlus, {
    locale: ElementPlusLocaleFr,
  })
app.mount("#app");