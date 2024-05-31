
import "reflect-metadata";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Carta_Pokemon extends BaseEntity {
   @PrimaryGeneratedColumn()
   id!: number;


   @Column()
   nombre!: string;


   @Column()
   tipo!: string;


   @Column()
   nivel!: number;

   @Column()
   coste!: number;

   @Column()
   hp!: number;

   @Column("simple-array")
   movimientos!: string[];


}
