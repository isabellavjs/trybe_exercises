const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.

  describe('when the user id exists', () => {
    test('returns user name', async () => {
      const findId = await getUserName('4');
      expect(findId).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    test('returns user name', async () => {
      try {
        await getUserName('3');
      } catch (error) {
        expect(error).toEqual({error: 'User with 3 not found.'});
      }
    });
  });