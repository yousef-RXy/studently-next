import { drive_v3 } from 'googleapis';
import getDrive from '@/config/drive';

export async function createFolder(
  name: string,
  parentId: string
): Promise<drive_v3.Schema$File> {
  const drive = await getDrive();
  const { data } = await drive.files.create({
    requestBody: {
      name,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentId],
    },
  });
  return data;
}

export async function deleteFile() {
  const drive = await getDrive();

  const response = await drive.files.delete({
    fileId: '1x2adyBbXZDAMceKnazK2h0th1D1D9OY-',
  });

  return response;
}
