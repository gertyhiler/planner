export class SecurityService {
  async bearerAuth(request: any, reply: any) {
    try {
      await request.jwtVerify();
      
      // Добавляем пользователя в request
      request.user = {
        id: request.user.id,
        email: request.user.email,
      };
    } catch (err) {
      return reply.status(401).send({
        error: 'Unauthorized',
        message: 'Необходима аутентификация',
        statusCode: 401,
      });
    }
  }
}
