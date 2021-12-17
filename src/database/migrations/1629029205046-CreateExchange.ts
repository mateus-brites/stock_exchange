import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExchange1629029205046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "exchanges",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "company_name",
                        type: "varchar", 
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true, 
                    },
                    {
                        name: "owner",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp", 
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp", 
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKExchangeCompany",
                        referencedTableName: "company",
                        referencedColumnNames: ["company"],
                        columnNames: ["company_name"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FKExchangeUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["username"],
                        columnNames: ["owner"],
                        onDelete: "SET NULL",
                        onUpdate: "CASCADE",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("exchanges");
    }

}
