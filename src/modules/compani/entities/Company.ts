import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid_v4 } from "uuid";

@Entity("company")
class Company {
    @PrimaryColumn()
    id: string;

    @Column()
    company: string;

    @Column()
    exchange_value: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid_v4();
        }
    }
}

export { Company };