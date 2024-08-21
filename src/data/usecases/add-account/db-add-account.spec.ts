import { Encrypter } from "../../protocols/encrypter"
import { DbAddAccount } from "./db-add-account"
interface SutTypes {
    sut: DbAddAccount,
    encrypterStub: Encrypter
}

const makeEncrypter = (): Encrypter => {
    class EncrypterStub implements Encrypter {
        async encrypt(value: string): Promise<string> {
            return new Promise(resolve => resolve('hased_password'))
        }
    }
    return new EncrypterStub();
}

const makeSut = (): SutTypes => {
    const encrypterStub = makeEncrypter()
    const sut = new DbAddAccount(encrypterStub)
    return {
        sut,
        encrypterStub
    }
}

describe('DbAddAccount Usecase', () => {
    test('Should call Encrypter with correct password', async () => {
        const { encrypterStub, sut } = makeSut()
        const encriptySpy = jest.spyOn(encrypterStub, 'encrypt')
        const accountData = {
            name: 'valid_name',
            email: 'valid_email',
            password: 'valid_password'
        }
        await sut.add(accountData)
        expect(encriptySpy).toHaveBeenCalledWith('valid_password')
    })
})