import { Company } from "../../company/entities/Company";
import { User } from "../../user/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid_v4 } from "uuid";


@Entity("exchanges")
class Exchange {

    @PrimaryColumn()
    id: string;

    @Column()
    company_name: string;

    @ManyToOne(() => Company)
    @JoinColumn({ name: 'company_name' })
    company: Company;

    @Column()
    available: boolean;

    @Column()
    owner: string

    @ManyToOne(() => User)
    @JoinColumn({ name: "owner" })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid_v4();
        }

        if(!this.available){
            this.available = true
        }
    }
}

export { Exchange };