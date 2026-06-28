"""
PNG 흰색/회색 배경 자동 제거 스크립트
BFS flood-fill from border — 경계와 연결된 흰/회색 픽셀만 투명처리
"""
from PIL import Image
import numpy as np
from collections import deque
import os, glob

def is_bg(r, g, b, threshold=232, gray_min=178):
    if r > threshold and g > threshold and b > threshold:
        return True
    diff = max(abs(int(r)-int(g)), abs(int(g)-int(b)), abs(int(r)-int(b)))
    if diff < 22 and r > gray_min:
        return True
    return False

def remove_bg(path):
    try:
        img = Image.open(path)
        # 이미 투명도 있으면 스킵
        if img.mode == 'RGBA':
            arr = np.array(img)
            if arr[:,:,3].min() < 250:
                print(f"SKIP (already transparent): {os.path.basename(path)}")
                return
        img = img.convert("RGBA")
        data = np.array(img, dtype=np.uint8)
        h, w = data.shape[:2]
        visited = np.zeros((h, w), dtype=bool)
        mask    = np.zeros((h, w), dtype=bool)

        q = deque()
        for x in range(w):
            q.append((0, x)); q.append((h-1, x))
        for y in range(1, h-1):
            q.append((y, 0)); q.append((y, w-1))

        while q:
            y, x = q.popleft()
            if visited[y, x]: continue
            visited[y, x] = True
            r, g, b = int(data[y,x,0]), int(data[y,x,1]), int(data[y,x,2])
            if is_bg(r, g, b):
                mask[y, x] = True
                for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
                    ny, nx = y+dy, x+dx
                    if 0 <= ny < h and 0 <= nx < w and not visited[ny,nx]:
                        q.append((ny, nx))

        data[mask, 3] = 0
        Image.fromarray(data).save(path, "PNG")
        px = int(mask.sum())
        print(f"OK  {os.path.basename(path):<38} {px:>7} px 제거")
    except Exception as e:
        print(f"ERR {path}: {e}")

paths = sorted(glob.glob("assets/**/*.png", recursive=True))
print(f"총 {len(paths)}개 파일 처리 시작...\n")
for p in paths:
    remove_bg(p)
print("\n완료!")
