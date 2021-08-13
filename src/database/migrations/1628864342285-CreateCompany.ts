import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompany1628864342285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "company",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "company",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "exchange_value",
                        type: "number",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company");
    }
}