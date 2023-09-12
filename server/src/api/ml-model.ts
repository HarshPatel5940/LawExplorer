const sdk = require('api')('@monster-api/v1.0#jw8b10lmdb3izd');

export async function generateResponse(authkey: string, query: string) {
  await sdk.auth(authkey);
  const res = await sdk
    .postGenerateLlama27bChat({
      beam_size: 1,
      max_length: 256,
      repetition_penalty: 1.2,
      temp: 0.98,
      top_k: 40,
      top_p: 1,
      prompt: query,
    })
    .catch((err: any) => {
      console.log(err);
    });

  console.log(res);
  return res.data;
}

export async function fetchResponse(authkey: string, processID: string) {
  // await sdk.auth(authkey);
  // const res = await sdk
  //   .getStatusProcess_id({ process_id: 'process_id' })
  //   .then(({ data }) => console.log(data))
  //   .catch(err => console.error(err));

  // console.log(res);
  return 'hi';
}
