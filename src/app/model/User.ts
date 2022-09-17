import { Produtos } from "./Produtos"

export class User{
    public id: number
    public nomeUsuario: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public produto:Produtos[]
}