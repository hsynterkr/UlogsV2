const SSC = require('sscjs');

const ssc = new SSC('https://api.steem-engine.com/rpc/');

export const getTearDropsBalance = username =>
  new Promise((resolve, reject) => {
    ssc.find(
      'tokens',
      'balances',
      { account: username, symbol: 'TEARDROPS' },
      1000,
      0,
      [],
      (err, result) => {
        if (err) {
          reject(err);
        }

        const balance = result && result.length ? result[0].balance : '0';

        return resolve(balance);
      },
    );
  });

export const getTearDropsTransactions = (username, offset = 0, limit = 1000) =>
  new Promise((resolve, reject) => {
    const url = `https://api.steem-engine.com/accounts/history?account=${username}&limit=${limit}&offset=${offset}&type=user&symbol=TEARDROPS&v=1552513635377`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .catch(err => {
        reject(err);
      })
      .then(res => res.json())
      .then(result => {
        const actions = result.map(action => [
          1,
          {
            timestamp: action.timestamp.replace('Z', ''),
            op: [
              'transfer_tokens',
              {
                amount: action.quantity,
                from: action.from,
                memo: action.memo,
                to: action.to,
              },
            ],
          },
        ]);
        resolve(actions);
      });
  });

export default getTearDropsBalance;
