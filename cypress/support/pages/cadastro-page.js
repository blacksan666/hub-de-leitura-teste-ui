class cadastroPage {

//seletores

campoNome() {return cy.get('#name')}
campoEmail() {return cy.get('#email')}
campoTelefone() {return cy.get('#phone')}
campoSenha() {return cy.get('#password')}
campoConfirmarSenha() {return cy.get('#confirm-password')}
checkboxTermos() {return cy.get('#terms-agreement')}
botaoRegistrar() {return cy.get('#register-btn')}

//metodos

visitarPaginaCadastro(){
cy.visit('register.html');}

preecherCadastro(name, email, phone, password, confirmPassword){
if (name) this.campoNome().type(name)
if (email) this.campoEmail().type(email)
this.campoTelefone().type(phone)
this.campoSenha().type(password)
this.campoConfirmarSenha().type(confirmPassword)
this.checkboxTermos().check()
this.botaoRegistrar().click()
}
}

export default new cadastroPage()