/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import "OAuthManager.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSDictionary *appDefaults = @{
                                @"host_preference": @"localhost",
                                @"port_preference": @"8081",
                                };
  [[NSUserDefaults standardUserDefaults] registerDefaults:appDefaults];
  
  NSURL *jsCodeLocation;

  NSString *host = [[NSUserDefaults standardUserDefaults] stringForKey: @"host_preference"];
  NSString *port = [[NSUserDefaults standardUserDefaults] stringForKey: @"port_preference"];
  
  NSString * urlString = [NSString stringWithFormat: @"http://%@:%@/index.ios.bundle?platform=ios&dev=true", host, port];
  jsCodeLocation = [NSURL URLWithString: urlString];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ProgressTrackerMobile"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [OAuthManager setupOAuthHandler:application];
  [self.window makeKeyAndVisible];
  return YES;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  return [OAuthManager handleOpenUrl:application
                             openURL:url
                   sourceApplication:sourceApplication
                          annotation:annotation];
}

@end
