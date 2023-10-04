import { expect, test } from 'vitest'
import { UserEntity } from './UserEntity'

test('Validate User', () => {
    const user = new UserEntity('teste', 'teste@gmail.com', '1234')
    user.validate()

    // expect(err).toBe('')
})