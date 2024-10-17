import { Controller, HttpRequest, HttpResponse } from "../../presentation/protocols";
import { LogControllerDecorator } from "./log";

describe('LogController Decorator', () => {

    test('Should call controller handle', async () => {
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
        const controllerStub = new ControllerStub();
        const handleSpy = jest.spyOn(controllerStub, 'handle');
        const sut = new LogControllerDecorator(controllerStub);
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