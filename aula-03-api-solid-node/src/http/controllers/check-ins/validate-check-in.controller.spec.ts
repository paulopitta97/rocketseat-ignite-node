import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Validate Check-In (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to validate a check-in', async () => {
    const { token } = await createAndAuthenticateUser(app)

    // Não é boa prática...
    const user = await prisma.user.findFirstOrThrow()

    // Não é boa prática...
    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -22.2602615,
        longitude: -42.5320479,
      },
    })

    // Não é boa prática...
    let checkIn = await prisma.checkIn.create({
      data: {
        gym_id: gym.id,
        user_id: user.id,
      },
    })

    const response = await request(app.server)
      .post(`/check-ins/${checkIn.id}/validate`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(204)

    // Não é boa prática...
    checkIn = await prisma.checkIn.findUniqueOrThrow({
      where: { id: checkIn.id },
    })

    // Não é boa prática...
    expect(checkIn.validated_at).toEqual(expect.any(Date))
  })
})
