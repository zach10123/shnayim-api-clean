import { getAliyah } from '@orthodox-union/shnayimmikrah';

export default async function handler(req, res) {
  const { parsha = "Vayera", aliyah = 1 } = req.query;

  try {
    const result = await getAliyah(parsha, Number(aliyah));
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
