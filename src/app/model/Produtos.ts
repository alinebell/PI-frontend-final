import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produtos{
    public id: number
    public nomeProduto: string
    public preco: number
    public descricao: string
    public modelo: string
    public foto: string
    public usuario:User
    public categoria: Categoria
    
}