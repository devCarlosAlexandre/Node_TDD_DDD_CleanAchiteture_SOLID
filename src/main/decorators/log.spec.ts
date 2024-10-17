import { Controller, HttpRequest, HttpResponse } from "../../presentation/protocols";
import { LogControllerDecorator } from "./log";


const makeController = (): Controller => {
    class ControllerStub implements Controller {
        async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
            const httpResponse: HttpResponse = {
                statusCode: 200,
                body: {
                    name: 'any_name',
                    email: 'anymail@mail.com',
                    password: 'hased_password'
                }
            }
            return new Promise(resolve => resolve(httpResponse));
        }
    }
    return new ControllerStub();
}
interface SutTypes {
    sut: LogControllerDecorator,
    controllerStub: Controller
}

const makeSut = (): SutTypes => {
    const controllerStub = makeController();
    const sut = new LogControllerDecorator(controllerStub);
    return {
        sut,
        controllerStub
    }
}

describe('LogController Decorator', () => {

    test('Should call controller handle', async () => {
        const { controllerStub, sut } = makeSut();
        const handleSpy = jest.spyOn(controllerStub, 'handle');
        const httpResquest = {
            body: {
                email: 'any_email@mail.com',
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        await sut.handle(httpResquest)
        expect(handleSpy).toHaveBeenCalledWith(httpResquest)
    })

})