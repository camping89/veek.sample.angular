import notify from 'devextreme/ui/notify';

export class Notification {
  public static Success(message: string, timeout: number = 1000) {
    notify(
      {
        message,
      },
      'success',
      timeout
    );
  }

  public static Error(message: string, timeout: number = 1000) {
    notify(
      {
        message,
      },
      'error',
      timeout
    );
  }

  public static Warning(message: string, timeout: number = 1000) {
    notify(
      {
        message,
      },
      'warning',
      timeout
    );
  }

  public static Info(message: string, timeout: number = 1000) {
    notify(
      {
        message,
      },
      'info',
      timeout
    );
  }
}
