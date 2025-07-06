import { Prisma } from '@prisma/client'
import { Student } from '@/domain/forum/enterprise/entities/student'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

export class PrismaAttachmentMapper {
  static toPrisma(
    attachment: Attachment,
  ): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: attachment.id.toString(),
      title: attachment.title,
      url: attachment.url,
    }
  }
}
