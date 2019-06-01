// RN < 0.40 support
#if __has_include(<React/RCTBridge.h>)
#import <React/RCTConvert.h>
#else
#import "RCTConvert.h"
#endif

#import "AppDelegate.h"
#import "AlertBox.h"
@implementation AlertBox

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(alert:(NSString *)title) {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"Ventive"
                                                                             message:title
                                                                      preferredStyle:UIAlertControllerStyleActionSheet];
    UIAlertAction *okAction = [UIAlertAction actionWithTitle:@"Ok"
                                                       style:UIAlertActionStyleDefault handler:^(UIAlertAction * action) {
                                                         NSLog(@"You pressed button one");
                                                       }];
    
    [alertController addAction: okAction];
    
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [delegate.window.rootViewController presentViewController:alertController animated:YES completion:nil];
  });
}

@end
