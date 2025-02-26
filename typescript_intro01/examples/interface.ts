interface User {
  readonly user_Id: number; //readonly field, cannot be changed
  readonly db_Id: string; //readonly field, cannot be changed
  user_email: string;
  user_goggleId?: string; //optional field
  start_trial(): string;
  get_coupon(couponName: string, value: number): number;
}

interface User {
  readonly github_id: string;
}

const suman: User = {
  user_Id: 100,
  db_Id: 'mongodb_100',
  user_email: 'suman@gmail.com',
  start_trial: () => `trial started`,
  get_coupon: (cName: `coupon_1`, cNumber: 10) => cNumber,
  github_id: `suman@ithub.com`,
};

const rahul: User = {
  user_Id: 200,
  db_Id: 'mongodb_200',
  user_email: 'rahul@gmail.com',
  user_goggleId: 'rahul@goggle.com',
  start_trial: () => `trial started`,
  get_coupon(cName: `coupon_2`, cNumber: 20) {
    return cNumber;
  },
  github_id: `rahul@ithub.com`,
};
